import { retrieveMeals } from "./retrieveMeals.mjs";
import { retrieveCups } from "./retrieveCups.mjs";

export function totalDogsValues(numDogs) {
    
    let totalCupsPerDay = 0;

    const meals1 = retrieveMeals(1);
    const cups1 = retrieveCups(1);
    let meals2 = 0, cups2 = 0, meals3 = 0, cups3 = 0, meals4 = 0, cups4 = 0;

    function totalPerDog(meals, cups) {
        return meals * cups;
    }
    
    
    switch (numDogs) {               
        case '1':
            totalCupsPerDay += totalPerDog(meals1, cups1);
            break;        
        case '2': 
            meals2 = retrieveMeals(2);
            cups2 = retrieveCups(2);          
            totalCupsPerDay += totalPerDog(meals1, cups1) + totalPerDog(meals2, cups2); 
            break;
        case '3':
            meals2 = retrieveMeals(2);
            cups2 = retrieveCups(2);
            meals3 = retrieveMeals(3);
            cups3 = retrieveCups(3);
            totalCupsPerDay += totalPerDog(meals1, cups1) + totalPerDog(meals2, cups2) + totalPerDog(meals3, cups3); 
            break;
        case '4':
            meals2 = retrieveMeals(2);
            cups2 = retrieveCups(2); 
            meals3 = retrieveMeals(3);
            cups3 = retrieveCups(3);
            meals4 = retrieveMeals(4);
            cups4 = retrieveCups(4);
            totalCupsPerDay += totalPerDog(meals1, cups1) + totalPerDog(meals2, cups2) + totalPerDog(meals3, cups3) + totalPerDog(meals4, cups4); 
            break;
    };

    return totalCupsPerDay;

    
};