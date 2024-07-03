export function retrieveMeals(itemNumber) {
    
    return Number(document.querySelector(`input[name="meals_per_day_dog${itemNumber}"]:checked`).value);
}