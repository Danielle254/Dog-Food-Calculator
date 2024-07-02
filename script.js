import { displayInputs } from './modules/displayInputs.mjs';
import { resetForm } from './modules/resetForm.mjs';
import { totalDogsValues } from './modules/totalDogsValues.mjs';
import { calculate } from './modules/calculate.mjs';

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


const dogsInHouseholdElements = document.getElementsByName('dogs_in_household');
for (let i = 0; i < dogsInHouseholdElements.length ; i ++) {
    dogsInHouseholdElements[i].addEventListener("click", displayInputs);
};

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


const resetButton = document.getElementById('reset_button');
resetButton.addEventListener("click", resetForm);










