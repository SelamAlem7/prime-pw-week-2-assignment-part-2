// WHAT IS THIS EVEN DOING?
This is using "//" to 'grey out' whatever follows after it. This means that the grey'd out section isnt read by the computer
as it is used for personal notating or communicating. Think of it as your personal notebook.


// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. A.Here, we make a code and we give that code a name. We name it 'Number' & we declare that 'Number' is equal to one. Declaring the the number one to 'Number' means that is what its value is = 1.
//    B. We then take 'Number' & we increment its value (1). Incrementing automatically adds 1 to whatever the value is. In this case, the value of 'Number' changed from 1 to 2.
//    C. We then declare that only if the value of 'Number' is greater than or equal to 2, (which it is in this case) to then show 'yes' as a result which is why we would console log 'yes'
// A.EXAMPLE. We make a variable called number and set it to 1 as a number.
// B.Then we increment the number variable. Number is now 2.
// C. We check if number is greater than or equal to 2. 2 is equal to 2, so we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//  Here we are declaring a code and calling it 'name'
//  We are then saying that the code we created and called 'name' is equal to 'Dane'. Meaning, the value of 'name' would be 'Dane'
//  We are then saying if the value of 'name' is an exact match to 'Mary', this would be true so our result would show 'Hi, Mary!'. So we would consol log 'Hi, Mary!'.
//  Here we are saying that if 'name' has any other value besides 'Mary' then we want it to show a result of 'How do you do?' so we would consol log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  Here are are creating a code and we are naming it 'secret'. by adding ';' right next to it, this is declaring that 'secret' has no value or that the value is = to 0.
//  We are than creating another code and naming is 'Code'. We are then saying that the value of 'Code' is equal to '123'.
//  We are than making a statment saying 'If' 'Code' has a value that exactly matches the numbers '123' that it means it is true.
//  We are also then saying, if 'code' does equal to '123' as stated above, then to change the value of 'secret' from 0 to now having the value of 'super'. (but only if 'code' is equal to 123)
//  Here, we are now changing the value of 'code' but only 'if' the value of 'code' is an exact match to '123'. If it ism we are telling it to take the value of 'code', which in this case it '123' and multiply it by '2' which equals '246'. Since this is true,  now '246' is going to be be the new value of 'code'.
//  we are then closing out this statmet. -anything in this statment only applies if its ALL true.

//  We are then creating another statment & declaring that only 'if' its true that the value of 'code' is greater than the number '250', to apply what is in the next line.
//  We are then saying if the above is true that the value of 'code' is greater than '250', to change the value of 'secret' to 'duper' (but only if its true that 'code' > '250')
//  We are then closing out this scenario of 'if' statment.

//  We can see that we do NOT have an 'else' string to declare that if the 2 above statment are not true to do the following.
//  Instead, we are console logging 'secret' to say that if BOTH of the above 'if' scenarios are NOT true, then our answer would be whatever the INITIAL value of 'secret' is, which in this case would be undefined becuase we never assigned 'secret' a value when we declared it. So we would consol log 'secret'
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//  We are creating a code here and calling it 'isStudent'. We are also declaring that 'isStudent' has a value to be 'true'.
//  We are then creating a code & calling it 'age'. We are then declaring that 'age' is equal to '34'. So the value of 'age' is '34'.
//  We are creating a code here and calling it 'zip'. We are also declaring that 'zip' has a value to be '55407'. So 'zip' = '55407'

//  We are then creating an 'if' statment saying that the value of 'isStudent' is an exact match to 'true'. We then added '&&' this means that whatever statment before the '&&' and after it BOTH have to be TRUE statments.
//***But the statment after '&&' is NOT true becuase it is saying that the value of 'zip' is 80000 which it isnt. (becuase the value of 'zip' is really '55407')
//  We are then saying if the statments we have created is ALL true then to show the result of 'You're a student on the West Coast!' ONLY if ALL is true. (in this case, that wont be our result becuase zip isnt equal to 80000)

//  We are then saying, if the above 'if' statment or scenarios is false then to check and see 'if' this one is true: 'if' 'isStudent' is equal to or have the value of 'false' (which it doesnt) OR, (which is what '||' means ), 'age' is less than '30' then to show the result of ''What are your hobbies?' which is why we console logged ''What are your hobbies?'

//  We are then saying if the two 'if' statment are BOTH FALSE, then to check & see if the following scenario is true instead: 'if' 'isStudent' has an exact value 'true', then to show the result of 'Welcome to Prime!' so we would console log 'Welcome to Prime!' (in this case, this is true so this would be our result).

//  Here, we are saying that if ALL of the above 'if' scenario's are NOT true, then to show the result of 'How about the weather?' so we would console log that to be our 'else' code incase nothing above is true.
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/



//______________________________________________________________________________

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!


// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/

//______________________________________________________________________________


//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
//FIX - colorOne = 'red', but the instructions ask to set it to 'blue'
// Should be: let colorOne = 'blue';

let colorTwo = 'blue';
//FIX - colorTwo = 'blue', but the instructions ask to set it to 'red'
// Should be: let colorTwo = 'red';

let mix = true;
//Written CORRECT!

if (mix === true) {
  colorOne = 'purple';
}
//Written CORRECT!
*/

//______________________________________________________________________________

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//Written CORRECT!

const time = 4;
//Written CORRECT!

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//Written CORRECT!

// MISSING! we should console.log(); to whatever we should get if both above
   statments were false.
  EXAMPLE: else {
    console.log( 'Both statments are flase');
  }

*/

//______________________________________________________________________________

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//Written CORRECT!

const minAge = 21;
//Written CORRECT!

if(minAge <= age) {
  console.log('no entry');
}
//FIX - I think here, since we are checking 'if age IS the one greater than or
        or equal TO minAge' as unstructed, we should switch the two so that
        minAge is written first?
// Should be: if(age >= minAge) {
  console.log('no entry');
}

else {
  console.log('enter');
}
*/
