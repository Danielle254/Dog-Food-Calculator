const dogFoodInfo = [
    {
        name: "Only Natural Pet Raw Blends Digestive Formula",
        size: "18 lbs",
        pricePerBag: 68,
        gallonsPerBag: 10 // TBD
    },
    {
        name: "Dog Food 2",
        size: "20 lbs",
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

    const userMealsPerDay = Number(document.querySelector('input[name="meals_per_day"]:checked').value);

    const userCupsPerMeal = Number(document.getElementById("cups_per_meal").value);

    const output = calculate(userMealsPerDay, userCupsPerMeal, index);

    document.getElementById("dog_food_weight").innerHTML = dogFoodInfo[index].size;
    document.getElementById("dog_food_chosen").innerHTML = dogFoodInfo[index].name;
    document.getElementById("days").innerHTML = output;
    
    
    
};








