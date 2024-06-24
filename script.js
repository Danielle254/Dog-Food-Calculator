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




