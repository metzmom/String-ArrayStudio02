let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";
let testStr;
let newTestStr;

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

//testStr=protoArray1;
//testStr=protoArray2;
//testStr=protoArray3;
//testStr=protoArray4;

for (let i = 0; i< strings.length; i++) {

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (strings[i].includes(', ')){

  console.log("test");
  testStrArr = strings[i].split(', ');
  //name of new array = split out string by comma
  testStrArr.reverse();
  newTestStr = testStrArr.join();
  console.log(newTestStr);
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
else {  // not ,
  if (strings[i].includes(';')) {
    testStrArr = strings[i].split(';');
    //name of new array = split out string by semicolon
    testStrArr.sort();
    newTestStr = testStrArr.join();
    console.log(newTestStr);
    console.log("test2");
  }

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
  else {  // not;
    if (strings[i].includes(' ')) {
      testStrArr = strings[i].split(' ');
      //name of new array = split out string by space
      testStrArr.sort();
      testStrArr.reverse();
      newTestStr = testStrArr.join();
      console.log(newTestStr);
      console.log("test3");
    }
  
//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.}

   else {  //not ' '
      if (strings[i].includes(',')){
        testStrArr = strings[i].split(',');
        //name of new array = split out string by comma
        testStrArr.reverse();
        newTestStr = testStrArr.join();
        console.log(newTestStr);
        console.log("test4");
      }

    }
  }    
}
}