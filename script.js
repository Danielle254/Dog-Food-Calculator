// dog food constants

const dogFoodInfo = {
    name: "Only Natural Pet Raw Blends Digestive Formula",
    poundsPerBag: 18,
    dollarsPerBag: 68,
    gallonsPerBag: 100 // TBD
};

const cupsPerGallon = 16;

// user inputs

let userInputs = {
    mealsPerDay: 2,
    cupsPerMeal: 1
};

function calculate() {
    const cupsPerBag = dogFoodInfo.gallonsPerBag * cupsPerGallon;
    const cupsPerDay = userInputs.mealsPerDay * userInputs.cupsPerMeal;
    const daysPerBag = cupsPerBag / cupsPerDay;
    return daysPerBag;
};

console.log(calculate());


