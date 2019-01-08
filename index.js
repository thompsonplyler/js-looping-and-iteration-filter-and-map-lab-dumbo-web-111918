// const result = words.filter(word => word.length > 6);
// console.log(materials.map(material => material.length));

// driversWithRevenueOver- This function takes an array of 
// driver JavaScript objects as the first argument and a 
// number called revenue as the second argument. It returns 
// an array of driver objects that have a revenue attribute 
// that's greater than the passed-in revenue argument.

function driversWithRevenueOver(driver, revenue){
    return driver.filter(thing => thing.revenue > revenue);
}

function driverNamesWithRevenueOver(driver, revenue){
    collect =  driver.filter(thing => thing.revenue > revenue);
    return collect.map(thing => thing.name);
} 

// Jesus's code (does work!) 
function exactMatch(driver, obj) {
   return driver.filter( (d) => d[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]);
 }

 function exactMatchToList(driver, obj){
    return exactMatch(driver,obj).map(thing => thing.name); 
    //list = driver.filter(d => d[Object.keys(obj)[0]]) === obj[Object.keys(obj)[0]];
    //return list.map(element => element.name);
}


// My code (does not work!) 
// function exactMatch(driver,{key: value}){
//     return driver.filter(object => object.key === value); 
// }