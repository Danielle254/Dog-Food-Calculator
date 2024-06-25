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
            item.value = `dog_food_${i + 1}`;
            dropdown.appendChild(item);        
        }
    ;
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
    return daysPerBag;
};

function retrieveFormInfo() {          

    let dogFoodChosen = document.querySelector('#dog_food_list').value;
    let index = Number(dogFoodChosen.slice(9));

    // generate variables for calculation based on user input      
    const userMealsPerDay = Number(document.getElementById('meals_per_day').value);
    const userCupsPerMeal = Number(document.getElementById('cups_per_meal').value);
    const toleranceValue = document.querySelector('input[name="tolerance"]:checked');

    // run calculation and update output on screen
    document.getElementById('dog_food_weight').innerHTML = data.dogFoodInfo[index].sizeInPounds;
    document.getElementById('dog_food_chosen').innerHTML = data.dogFoodInfo[index].name;
    document.getElementById('days').innerHTML = calculate(userMealsPerDay, userCupsPerMeal, toleranceValue, index);    
    
    console.log("test");
    
};









