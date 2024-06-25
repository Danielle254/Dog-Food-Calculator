const dogFoodInfo = [
    {
        name: "Only Natural Pet Raw Blends Digestive Formula",
        size: "18 lb",
        pricePerBag: 68,
        gallonsPerBag: 10 
    },
    {
        name: "Dog Food 2",
        size: "20 lb",
        pricePerBag: 75,
        gallonsPerBag: 8
    }
];

const cupsPerGallon = 16;


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

    const userMealsPerDay = Number(document.getElementById('meals_per_day').value);

    const userCupsPerMeal = Number(document.getElementById('cups_per_meal').value);

    // update output on screen
    document.getElementById('dog_food_weight').innerHTML = dogFoodInfo[index].size;
    document.getElementById('dog_food_chosen').innerHTML = dogFoodInfo[index].name;
    document.getElementById('days').innerHTML = calculate(userMealsPerDay, userCupsPerMeal, index);    
    
    
};









