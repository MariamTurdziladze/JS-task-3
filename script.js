let age = 25;
let ticketPrice;

if (age <= 12 && age >0) {
    console.log("Your ticket price is 5$");
} else if (age > 12 && age <= 17) {
    console.log("Your ticket price is 10$");
} else if (age >= 18 && age <= 64) {
    console.log("Your ticket price is 15$"); 
} else if (age >= 65 && age <= 120) {
    console.log("Your ticket price is 8$"); 
} else if (age <0 || age >= 120) {
    console.log("Wrong age"); 

}