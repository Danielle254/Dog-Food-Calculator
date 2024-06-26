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



function calculate(mealsPerDay, cupsPerMeal, tolerance, index) {
    let ouncesPerCup = 0;
    if (tolerance === "average") {
        ouncesPerCup = data.averageOuncesPerCup;
    } else if (tolerance === "conservative") {
        ouncesPerCup = data.conservativeOuncesPerCup;
    };

    const cupsPerBag = data.dogFoodInfo[index].sizeInPounds * data.ouncesPerPound / ouncesPerCup;
    const cupsPerDay = mealsPerDay * cupsPerMeal;
    const daysPerBag = cupsPerBag / cupsPerDay;
    return daysPerBag.toFixed(0);
};

function generate() {     
    
    // generate variables for calculation based on user input 
    const dogFoodChosen = document.querySelector('#dog_food_list').value; 
    if (dogFoodChosen === "select") {
        alert("Please select a dog food from the list");
    } else {    
        const index = Number(dogFoodChosen.slice(9)) - 1;    
        const userMealsPerDay = Number(document.getElementById('meals_per_day').value);
        const userCupsPerMeal = Number(document.getElementById('cups_per_meal').value);
        
        // run calculation and update output on screen
        const toleranceValue = document.querySelector('input[name="tolerance"]:checked').value;    
        document.getElementById("output_text").style.visibility = "visible";
        document.getElementById('dog_food_weight').innerHTML = data.dogFoodInfo[index].sizeInPounds;
        document.getElementById('dog_food_chosen').innerHTML = data.dogFoodInfo[index].name;    
        document.getElementById('days').innerHTML = calculate(userMealsPerDay, userCupsPerMeal, toleranceValue, index);     
    }
};

function resetForm() {
    document.getElementById("user_input_form").reset();
    document.getElementById("output_text").style.visibility = "hidden";
}









