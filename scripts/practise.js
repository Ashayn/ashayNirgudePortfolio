//____________________Variables__________________//






















//Functions

//var firstNumber = prompt("Hey user, please enter the first number");
//var secondNumber = prompt("Enter second number");

/*var x = prompt("Hey user, please enter the first number")
var y= prompt("Enter second number")

addCubes(x,y);

function addCubes(x,y){
	firstNumber = parseInt(x);
	secondNumber = parseInt(y);	
	console.log(firstNumber,secondNumber, typeof firstNumber, typeof secondNumber);
	var sum = (firstNumber)*(firstNumber)*(firstNumber) + (secondNumber)*(secondNumber)*(secondNumber);
	alert(sum);
}


//Complex function for ecounter

function eCounter(){
	var phrase = (prompt("Hey User, Enter your sentence"));
	//console.log(phrase);
	//console.log(phrase.charAt(3));
	var eCounter=0

	if (typeof phrase!="string"){
		alert("Invalid entry")
		return false;
	}
	else{
		for(var index=0; index<=phrase.length-1; index++){
			//console.log(enteredString.chartAt(index));
			if(phrase.charAt(index)=="e"||phrase.charAt(index)=="E"){
				eCounter++;
			}
		}
		alert("The total number of Es in the entered string are "+eCounter);
		return("true")
	}
}
eCounter();


var x=6;
var q=3, u=4;
x=product(q,u)
console.log("product is " + x);

function product(a,b){
	var x=a*b;
	return x;
}
*/

//Declared function
/*-----------------------------------
function addNumbers(){
	var a = 5+5+5;
	console.log(a);
}

addNumbers();
-----------------------------------*/

//Anonymous functions
/*----------------------------------
var a = function(){
	var s = 6+4;
	//console.log(s);
	return s;
};
//------------------------------------------------------------------------------------

/a(); 	//Calling the anonymous function by calling the variable name*/

/*
//var customer = "new";   //select either new or old
var customer = "new"; //select either new or old

var greeting;

	if(customer=='new'){
		greeting= function(){alert("You are a new customer");};
	}
	else if("customer=='old"){
		greeting=function(){alert("You are an existing customer");};
	}

function displayCustomerRelation(message){message();}

displayCustomerRelation(greeting);

//-------------------------------------------------------------------------------------

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];
console.log(passengers[0][1]);
//console.log(passengers[1]);                   
var modifiedNames=passengers.map(function (cells){
	return cells[0]+" "+cells[1];}
                            );
 //console.log(modifiedNames);

 var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];
modifiedNames.map(function(cellArray){
	alert("Yo, " + modifiedNames); 
});
*/

/*---------Returning Functionexpression from a function---------------------------------

var userChoice = 1/2/3

function adventureSelector(userChoice) {
  if(userChoice == 1){
    return function(){alert("You selected the Vines of Doom!");
                     };
  } else if(userChoice == 2){
    return function(){alert("Looks like you want the Lake of Despair!");
                     };
  } else if(userChoice == 3){
    return function(){alert("The Caves of Catastrophe!");
                     };
  }
}

--------------------------------------------------------------------------------------*/

//To immediately invoke a returned function without assigning it to a variable, write tne name of the function, send the parameter in the parenthisis and add one more parenthesis after that
//adventureSelector(3)();
//-------------------------------------------------------------------------------------------
/*
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

var start = 2;
var applyAndEmpty = function(input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
  }
  return input;
};
alert(applyAndEmpty(start, puzzlers));
*/

/*var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
console.log(puzzlers[3](9));

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
*/