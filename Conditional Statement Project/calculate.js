function calculateTicketPrice(age){
    if (age<12){
        return 5;
    }
    else if(age<18){
        return 10;
    }
    else if(age<60){
        return 15;
    }
}
const age = 25;
const ticketPrice= calculateTicketPrice(age);
console.log("for an age of" + age + ", the ticket price is: $" + ticketPrice);