///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce(function(prev, cur) {
    return prev + cur.price; 
}, 0 );

console.log('Cart Price:', summedPrice)



// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let taxCalc = .06
let cuponDiscount = 4
const calcFinalPrice= (cartTotal,couponValue,tax) => {
    return(cartTotal + tax) - couponValue
}
console.log(calcFinalPrice(summedPrice,cuponDiscount,taxCalc))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Name : This property will be string and will contain the first and last name of the customer.

    customer ID: This property will be name and number combination. It will contain the unique identifier number of the customer.

    Delivery address: This property will be both strings and numbers. It will contain the home or delivery address of the customer.

    Phone number: This property  is a number, it will contain the mobile number of the customer.

    Email address: This property will be both strings and number, contain the customer registered email address where information about promos and orders can be sent to.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObjects = {  
    customerName: 'Denetra Hol',
    customerID: 'hol324',
    delAddress: '3401 E 17th st',
    custPhoneNumber: 8065596681,
    email: 'deehol@devmountain.com'
    
    }