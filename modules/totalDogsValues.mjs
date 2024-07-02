export function totalDogsValues() {
    const dogsInHousehold = document.querySelector('input[name="dogs_in_household"]:checked').value;
    let totalCupsPerDay = 0;

    const meals1 = Number(document.querySelector('input[name="meals_per_day_dog1"]:checked').value);
    const cups1 = Number(document.getElementById("cups_per_meal_dog1").value);
    let meals2 = 0, cups2 = 0, meals3 = 0, cups3 = 0, meals4 = 0, cups4 = 0;
    
    
    switch (dogsInHousehold) {               
        case '1':
            totalCupsPerDay += meals1 * cups1;
            break;        
        case '2': 
            meals2 = Number(document.querySelector('input[name="meals_per_day_dog2"]:checked').value);
            cups2 = Number(document.getElementById("cups_per_meal_dog2").value);           
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2); 
            break;
        case '3':
            meals2 = Number(document.querySelector('input[name="meals_per_day_dog2"]:checked').value);
            cups2 = Number(document.getElementById("cups_per_meal_dog2").value); 
            meals3 = Number(document.querySelector('input[name="meals_per_day_dog3"]:checked').value);
            cups3 = Number(document.getElementById("cups_per_meal_dog3").value);
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2) + (meals3 * cups3); 
            break;
        case '4':
            meals2 = Number(document.querySelector('input[name="meals_per_day_dog2"]:checked').value);
            cups2 = Number(document.getElementById("cups_per_meal_dog2").value); 
            meals3 = Number(document.querySelector('input[name="meals_per_day_dog3"]:checked').value);
            cups3 = Number(document.getElementById("cups_per_meal_dog3").value);
            meals4 = Number(document.querySelector('input[name="meals_per_day_dog4"]:checked').value);
            cups4 = Number(document.getElementById("cups_per_meal_dog4").value);
            totalCupsPerDay += (meals1 * cups1) + (meals2 * cups2) + (meals3 * cups3) + (meals4 * cups4); 
            break;
    };

    return totalCupsPerDay;

    
};