/* let data;
async function fetchData() {
    const response = await fetch('./data.json');
    data = await response.json();       
};

fetchData(); */

const data = {
    "dogFoodInfo" : [
        {
            "name": "Only Natural Pet Raw Blends Digestive Formula",
            "sizeInPounds": 18,
            "pricePerBag": 68,
            "linkToBuy":  "https://www.petsmart.com/dog/food/dry-food/only-natural-pet-rawblends-adult-dog-food---kibble-with-raw-bites-digestive-formula-5349277.html"     
        },
        {
            "name": "Open Farm Beef Recipe",
            "sizeInPounds": 22,
            "pricePerBag": 97,
            "linkToBuy": "https://checkout.openfarmpet.com/products/dry-dog-food-with-beef"        
        },
        {
            "name": "Merrick Backcountry Raw Infused Great Plains",
            "sizeInPounds": 20,
            "pricePerBag": 85,
            "linkToBuy": "https://www.chewy.com/merrick-backcountry-raw-infused-grain/dp/253714?utm_source=google-product&utm_medium=cpc&utm_campaign=20394650868&utm_content=&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxT1-a1Dldt-0U0tKC_YDDGg0kDYP2_ZxujQtd3KzvvJNZdIcjAdQcBoCmQcQAvD_BwE" 
        }
    ],
    "averageOuncesPerCup" : 3.5,
    "conservativeOuncesPerCup" : 4,
    "ouncesPerPound" : 16
};


function populate() {     
    
    let dropdown = document.getElementById("dog_food_list");

    for (let i = 0;  i < data.dogFoodInfo.length; i++)
        {
            let item = document.createElement('option');
            item.textContent = data.dogFoodInfo[i].name + " - " + data.dogFoodInfo[i].sizeInPounds + "lb"; 
            item.value = `dog_food_${i + 1}`;
            dropdown.appendChild(item);        
        };
};



function calculate(mealsPerDay, cupsPerMeal, tolerance, index) {
    // calculate daysPerBag
    let ouncesPerCup = 0;
    if (tolerance === "average") {
        ouncesPerCup = data.averageOuncesPerCup;
    } else if (tolerance === "conservative") {
        ouncesPerCup = data.conservativeOuncesPerCup;
    };
    const bagSize = data.dogFoodInfo[index].sizeInPounds;
    const cupsPerBag = bagSize * data.ouncesPerPound / ouncesPerCup;
    const cupsPerDay = mealsPerDay * cupsPerMeal;
    const daysPerBag = cupsPerBag / cupsPerDay;
    
    // calculate pricePerPound and pricePerMonth
    const bagPrice = data.dogFoodInfo[index].pricePerBag;
    const pricePerPound = bagPrice / bagSize;
    const pricePerMonth = bagPrice / daysPerBag * 30.4;

    return [daysPerBag.toFixed(0), pricePerPound.toFixed(2), pricePerMonth.toFixed(2)];
};

function generate() {     
    
    // check dropdown form field validation. all other form fields validated with built in HTML
    const dogFoodChosen = document.querySelector('#dog_food_list').value; 
    if (dogFoodChosen === "select") {
        alert("Please select a dog food from the list");
    } else {    
        // generate variables for calculation based on user input            
        const userMealsPerDay = Number(document.querySelector('input[name="meals_per_day"]:checked').value);
        const userCupsPerMeal = Number(document.getElementById('cups_per_meal').value);
        const toleranceValue = document.querySelector('input[name="tolerance"]:checked').value; 
        const index = Number(dogFoodChosen.slice(9)) - 1; 
        
        // run calculation and display output on screen           
        document.getElementById('output_text').style.visibility = "visible";
        
        const [days, perPound, perMonth] = calculate(userMealsPerDay, userCupsPerMeal, toleranceValue, index);
        
        document.getElementById('dog_food_weight').innerHTML = data.dogFoodInfo[index].sizeInPounds;
        document.getElementById('dog_food_chosen').innerHTML = data.dogFoodInfo[index].name;            
        document.getElementById('days').innerHTML = days;
        document.getElementById('price_per_pound').innerHTML = perPound;
        document.getElementById('price_per_month').innerHTML = perMonth;      
        document.getElementById('buy_now').setAttribute('href', data.dogFoodInfo[index].linkToBuy);
    }
};

function resetForm() {
    document.getElementById('user_input_form').reset();
    document.getElementById('output_text').style.visibility = "hidden";
};










