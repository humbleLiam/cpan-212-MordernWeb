const _ = require("lodash");
const holidays = [
    {name: "Christmas", date: new Date("2025-12-15")},
    {name: "Canada Day", date: new Date("2025-07-01")},
    {name: "Apirls Fools", date: new Date("2025-04-01")}

];

let today = new Date;


holidays.forEach( holiday =>{
    let dateDiff = holiday.date - today;

    let days = Math.ceil( dateDiff/(1000 * 60 * 60 *24));
    console.log(days);

});


let randomIndex = _.random(holidays.length -1);
console.log(`${holidays[randomIndex].name} ${holidays[randomIndex].date}`);

let indexForChristmas = _.findIndex(holidays, {name: "Christmas"});
let indexForCanadaDay = _.findIndex(holidays, {name : "Canada Day"});


console.log("Index of Christmass in the collection: " + indexForChristmas );
console.log("Index of Canada Day in the collection : " + indexForCanadaDay);