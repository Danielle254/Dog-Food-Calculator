export function displayInputs() {
    let checked = document.querySelector('input[name="dogs_in_household"]:checked').value;    
             
    switch (checked) {
        case "1":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "none";
            document.getElementById('dog_3').style.display = "none";
            document.getElementById('dog_4').style.display = "none";
            document.getElementById('2_meals_per_day_dog2').required = false;
            document.getElementById('cups_per_meal_dog2').required = false;
            break;
            document.getElementById('2_meals_per_day_dog3').required = false;
            document.getElementById('cups_per_meal_dog3').required = false;
            break;
            document.getElementById('2_meals_per_day_dog4').required = false;
            document.getElementById('cups_per_meal_dog4').required = false;
            break;
        case "2":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "none";
            document.getElementById('dog_4').style.display = "none";
            document.getElementById('2_meals_per_day_dog2').required = true;
            document.getElementById('cups_per_meal_dog2').required = true;
            break;
            document.getElementById('2_meals_per_day_dog3').required = false;
            document.getElementById('cups_per_meal_dog3').required = false;
            break;
            document.getElementById('2_meals_per_day_dog4').required = false;
            document.getElementById('cups_per_meal_dog4').required = false;
            break;
        case "3":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "block";
            document.getElementById('dog_4').style.display = "none";
            document.getElementById('2_meals_per_day_dog2').required = true;
            document.getElementById('cups_per_meal_dog2').required = true;
            break;
            document.getElementById('2_meals_per_day_dog3').required = false;
            document.getElementById('cups_per_meal_dog3').required = true;
            break;
            document.getElementById('2_meals_per_day_dog4').required = true;
            document.getElementById('cups_per_meal_dog4').required = false;
            break;
        case "4":
            document.getElementById('dog_1').style.display = "block";
            document.getElementById('dog_2').style.display = "block";
            document.getElementById('dog_3').style.display = "block";
            document.getElementById('dog_4').style.display = "block";
            document.getElementById('2_meals_per_day_dog2').required = true;
            document.getElementById('cups_per_meal_dog2').required = true;
            break;
            document.getElementById('2_meals_per_day_dog3').required = false;
            document.getElementById('cups_per_meal_dog3').required = false;
            break;
            document.getElementById('2_meals_per_day_dog4').required = true;
            document.getElementById('cups_per_meal_dog4').required = true;
            break;
    };        
};