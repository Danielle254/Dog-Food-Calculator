import { displayInputs } from './modules/displayInputs.mjs';
import { resetForm } from './modules/resetForm.mjs';
import { totalDogsValues } from './modules/totalDogsValues.mjs';
import { calculate } from './modules/calculate.mjs';


// fetches data from JSON file
async function fetchData() {
    const response = await fetch('./data.json');
    const results = await response.json();    
    return results;          
};


// populates dropdown menu of dog food types upon screen load
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

// controls display/hide and required/not attributes of 
// meals per day and cups per meals inputs 
// based on number of dogs per household selection
const dogsInHouseholdElements = document.getElementsByName('dogs_in_household');
for (let i = 0; i < dogsInHouseholdElements.length ; i ++) {
    dogsInHouseholdElements[i].addEventListener("click", displayInputs);
};


// runs upon submitting the form
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


// retrieve user input data, run calculation, 
// and display output message on screen
const form = document.getElementById('user_input_form');
form.addEventListener("submit", createOutput);

// clicking reset button resets the entire form
const resetButton = document.getElementById('reset_button');
resetButton.addEventListener("click", resetForm);

// populate food to compare dropdown list
function populateCompare() {
    const originalDropdown = document.getElementById('dog_food_list');
    const excludeFood = document.querySelector('#dog_food_list').value;
    const indexToCut = Number(excludeFood.slice(9)); 
    const compareDropdown = document.getElementById('compare_food');

    const newArray = [];
    for (let i = 0; i < originalDropdown.length; i++) {
        newArray.push(originalDropdown.options[i].text);
    }
    
    newArray.splice(indexToCut, 1);
    

    // populate compare dropdown menu
    for (let i = 0;  i < newArray.length; i++)
        {
            let item = document.createElement('option');
            item.textContent = newArray[i]; 
            item.value = `dog_food_${i + 1}`;
            compareDropdown.appendChild(item);        
        };    
};

const compareButton = document.getElementById('compare_button');
compareButton.addEventListener("click", populateCompare);










