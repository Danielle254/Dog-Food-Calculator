let data;
async function fetchData() {
    const response = await fetch('./data.json');
    data = await response.json();       
};

fetchData();


function populate() {     

    let dropdown = document.getElementById("dog_food_list");

    for (let i = 0;  i < data.dogFoodInfo.length; i++)
        {
            let item = document.createElement('option');
            item.textContent = data.dogFoodInfo[i].name + " - " + data.dogFoodInfo[i].sizeInPounds + "lb"; 
            item.value = `dog_food_${i + 1}`;
            dropdown.appendChild(item);        
        };
};

function validate(food, meals, cups) {
    const tol = document.querySelector('input[name="tolerance"]:checked')?.value;
    if (food === "select" || !meals || !cups || !tol) {
        return false;
    } /* else if (meals !== "1" || meals !== "2" || meals !== "3") { 
        return false;
    } else if (Number(cups) < 0 ) {
        return false; 
    } else if (cups.includes('.') && cups.split('.')[1].length > 2) {
        return false;
    } */ else {
        return true;
    };
};

function calculate(mealsPerDay, cupsPerMeal, tolerance, index) {
    let ouncesPerCup = 0;
    if (tolerance === "average") {
        ouncesPerCup = data.averageOuncesPerCup;
    } else if (tolerance === "conservative") {
        ouncesPerCup = data.conservativeOuncesPerCup;
    };

    const cupsPerBag = data.dogFoodInfo[index].sizeInPounds * data.ouncesPerPound / ouncesPerCup;
    const cupsPerDay = mealsPerDay * cupsPerMeal;
    const daysPerBag = cupsPerBag / cupsPerDay;
    return daysPerBag.toFixed(0);
};

function generate() {     

    // generate variables for calculation based on user input 
    const dogFoodChosen = document.querySelector('#dog_food_list').value;     
    const userMealsPerDay = document.getElementById('meals_per_day').value;
    const userCupsPerMeal = document.getElementById('cups_per_meal').value;
    

    // check validation on user inputs
    if (validate(dogFoodChosen, userMealsPerDay, userCupsPerMeal)) {
        // run calculation and update output on screen
        const toleranceValue = document.querySelector('input[name="tolerance"]:checked').value;
        const index = Number(dogFoodChosen.slice(9)) - 1;
        document.getElementById("output_text").style.visibility = "visible";
        document.getElementById('dog_food_weight').innerHTML = data.dogFoodInfo[index].sizeInPounds;
        document.getElementById('dog_food_chosen').innerHTML = data.dogFoodInfo[index].name;    
        document.getElementById('days').innerHTML = calculate(Number(userMealsPerDay), Number(userCupsPerMeal), toleranceValue, index); 
    } else {
        alert("All fields are required. Meals per Day can only be 1, 2, or 3. Cups per Meal must be a positive number with no more than 2 decimal places.");
        location.reload();
    };   
    
};

function resetForm() {
    document.getElementById("user_input_form").reset();
    document.getElementById("output_text").style.visibility = "hidden";
}









