import data from './data.json';


function calculate(mealsPerDay, cupsPerMeal, index) {
    const cupsPerBag = data.dogFoodInfo[index].gallonsPerBag * data.cupsPerGallon;
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

    // update output on screen
    document.getElementById("dog_food_weight").innerHTML = dogFoodInfo[index].size;
    document.getElementById("dog_food_chosen").innerHTML = dogFoodInfo[index].name;
    document.getElementById("days").innerHTML = calculate(userMealsPerDay, userCupsPerMeal, index);
    
    
    
};








