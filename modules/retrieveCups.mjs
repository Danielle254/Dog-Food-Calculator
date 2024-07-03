export function retrieveCups(itemNumber) {
    
    return Number(document.getElementById(`cups_per_meal_dog${itemNumber}`).value);
}