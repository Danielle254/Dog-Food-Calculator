async function fetchData() {
    const response = await fetch('./data.json');
    const results = await response.json();    
    return results;          
};

window.onload = function () {
    

    fetchData().then((results) => {
        const data = results;
        const dropdown = document.getElementById("dog_food_list");

        for (let i = 0;  i < data.dogFoodInfo.length; i++)
            {
                let item = document.createElement('option');
                item.textContent = data.dogFoodInfo[i].name + " - " + data.dogFoodInfo[i].sizeInPounds + "lb"; 
                item.value = `dog_food_${i + 1}`;
                dropdown.appendChild(item);        
            };
        });
};



function displayInputs() {
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


function calculate(cupsPerDay, tolerance, bagSize, bagPrice) {
        
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

    return [daysPerBag.toFixed(0), pricePerPound.toFixed(2), pricePerMonth.toFixed(2)];
    
};


function totalDogsValues() {
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

    
}


function createOutput(event) {     
    
    // check dropdown form field validation. all other form fields validated with built in HTML
    const dogFoodChosen = document.querySelector('#dog_food_list').value; 
    if (dogFoodChosen === "select") {
        alert("Please select a dog food from the list");
    } else {    

        fetchData().then((results) => {
            const data = results;
            
            // generate variables for calculation based on user input            
            const totalCupsPerDay = totalDogsValues();
            const toleranceValue = document.querySelector('input[name="tolerance"]:checked').value; 
            const index = Number(dogFoodChosen.slice(9)) - 1; 
            const bagSize = data.dogFoodInfo[index].sizeInPounds;
            const buyNowLink = data.dogFoodInfo[index].linkToBuy;
            const bagPrice = data.dogFoodInfo[index].pricePerBag;
            
            //display output on screen           
            document.getElementById('output_text').style.visibility = "visible";
            
            // run calculation
            const [days, perPound, perMonth] = calculate(totalCupsPerDay, toleranceValue, bagSize, bagPrice);
            
            
            // update span elements in output message
            document.getElementById('dog_food_weight').innerHTML = data.dogFoodInfo[index].sizeInPounds;
            document.getElementById('dog_food_chosen').innerHTML = data.dogFoodInfo[index].name;            
            document.getElementById('days').innerHTML = days;
            document.getElementById('price_per_pound').innerHTML = perPound;
            document.getElementById('price_per_month').innerHTML = perMonth; 
            document.getElementById('buy_now').setAttribute('href', buyNowLink);
        })
        
    }

    event.preventDefault();
};

const form = document.getElementById('user_input_form');
form.addEventListener("submit", createOutput);

function resetForm() {
    document.getElementById('user_input_form').reset();
    document.getElementById('output_text').style.visibility = "hidden";
    document.getElementById('dog_1').style.display = "none";
    document.getElementById('dog_2').style.display = "none";
    document.getElementById('dog_3').style.display = "none";
    document.getElementById('dog_4').style.display = "none";
};

const resetButton = document.getElementById('reset_button');
resetButton.addEventListener("click", resetForm);










