// ran with jest
const calculate = require('../modules/calculate.mjs');


test('properly calculates days per bag', () => {
    expect(calculate(4, "conservative", 20, 60)).toEqual({
        "daysPerBag": "20", 
        "pricePerPound": "3.00", 
        "pricePerMonth": "91.20"
    })
})


test('properly calculates days per bag', () => {
    expect(calculate(2, "conservative", 20, 60)).toEqual({
        "daysPerBag": "40", 
        "pricePerPound": "3.00", 
        "pricePerMonth": "45.60"
    })
})

// 2 tests ran, 2 pass