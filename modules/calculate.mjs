export function calculate(cupsPerDay, tolerance, bagSize, bagPrice) {
        
    // calculate daysPerBag
    let ouncesPerCup = 0;
    if (tolerance === "average") {
        ouncesPerCup = 3.5;
    } else if (tolerance === "conservative") {
        ouncesPerCup = 4;
    };
    
    // calculate daysPerBag
    const cupsPerBag = bagSize * 16 / ouncesPerCup;
    const daysPerBag = cupsPerBag / cupsPerDay;
    
    // calculate pricePerPound and pricePerMonth
    const pricePerPound = bagPrice / bagSize;
    const pricePerMonth = bagPrice / daysPerBag * 30.4;

    return {
        "daysPerBag": daysPerBag.toFixed(0), 
        "pricePerPound": pricePerPound.toFixed(2), 
        "pricePerMonth": pricePerMonth.toFixed(2)
    }
    
};