let data;
async function fetchData() {
    const response = await fetch('./data.json');
    data = await response.json();       
};

fetchData();


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

function displayInputs() {
    let checked = document.querySelector('input[name="dogs_in_household"]:checked').value;
    
             
    switch (checked) {
        case "1":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "none";
            document.getElementById('dog_3').style.display = "none";
            document.getElementById('dog_4').style.display = "none";
            break;
        case "2":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "none";
            document.getElementById('dog_4').style.display = "none";
            break;
        case "3":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "block";
            document.getElementById('dog_4').style.display = "none";
            break;
        case "4":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "block";
            document.getElementById('dog_4').style.display = "block";
            break;
    };        
};


function calculate(cupsPerDay, tolerance, index) {
    // calculate daysPerBag
    let ouncesPerCup = 0;
    if (tolerance === "average") {
        ouncesPerCup = 3.5;
    } else if (tolerance === "conservative") {
        ouncesPerCup = 4;
    };
    const bagSize = data.dogFoodInfo[index].sizeInPounds;
    const cupsPerBag = bagSize * 16 / ouncesPerCup;
    const daysPerBag = cupsPerBag / cupsPerDay;
    
    // calculate pricePerPound and pricePerMonth
    const bagPrice = data.dogFoodInfo[index].pricePerBag;
    const pricePerPound = bagPrice / bagSize;
    const pricePerMonth = bagPrice / daysPerBag * 30.4;

    return [daysPerBag.toFixed(0), pricePerPound.toFixed(2), pricePerMonth.toFixed(2)];
};


function totalDogsValues() {
    const dogsInHousehold = document.querySelector('input[name="dogs_in_household"]:checked').value;
    let totalCupsPerDay = 0;

    const meals1 = Number(document.querySelector('input[name="meals_per_day_dog1"]:checked').value);
    const cups1 = Number(document.getElementById("cups_per_meal_dog1").value);
    let meals2 = Number(document.querySelector('input[name="meals_per_day_dog2"]:checked').value);
    const cups2 = Number(document.getElementById("cups_per_meal_dog2").value);
    const meals3 = Number(document.querySelector('input[name="meals_per_day_dog3"]:checked').value);
    const cups3 = Number(document.getElementById("cups_per_meal_dog3").value);
    const meals4 = Number(document.querySelector('input[name="meals_per_day_dog4"]:checked').value);
    const cups4 = Number(document.getElementById("cups_per_meal_dog4").value);
    

    switch (dogsInHousehold) {               
        case "1":
            totalCupsPerDay += meals1 * cups1;
            break;        
        case "2":            
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2); 
            break;
        case "3":
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2) + (meals3 * cups3); 
            break;
        case "4":
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2) + (meals3 * cups3) + (meals4 * cups4); 
            break;
    }

    return totalCupsPerDay;
}

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










