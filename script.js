const data = 
{
    "dogFoodInfo" : [
        {
            "name": "Dog Food 1",
            "sizeInPounds": 18,
            "pricePerBag": 68        
        },
        {
            "name": "Dog Food 2",
            "sizeInPounds": 20,
            "pricePerBag": 75        
        },
        {
            "name": "Dog Food 3",
            "sizeInPounds": 16,
            "pricePerBag": 65
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
            item.value = data.dogFoodInfo[i].name;
            dropdown.appendChild(item);        
        }
    ;
};


function calculate(mealsPerDay, cupsPerMeal, index) {
    const cupsPerBag = dogFoodInfo[index].gallonsPerBag * cupsPerGallon;
    const cupsPerDay = mealsPerDay * cupsPerMeal;
    const daysPerBag = cupsPerBag / cupsPerDay;
    return daysPerBag;
};

function retrieveFormInfo() {    
    
    let dogFoodChosen = document.querySelector('input[name="food_type"]:checked');

    let index;
    switch (dogFoodChosen.value) {
        case "dog_food_1":
            index = 0;
            break;
        case "dog_food_2":
            index = 1;
            break;
    }

    // generate variables for calculation based on user input
    const userMealsPerDay = Number(document.getElementById('meals_per_day').value);
    const userCupsPerMeal = Number(document.getElementById('cups_per_meal').value);

    // run calculation and update output on screen
    document.getElementById('dog_food_weight').innerHTML = dogFoodInfo[index].size;
    document.getElementById('dog_food_chosen').innerHTML = dogFoodInfo[index].name;
    document.getElementById('days').innerHTML = calculate(userMealsPerDay, userCupsPerMeal, index);        
    
};









