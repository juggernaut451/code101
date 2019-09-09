// Write a program to check whether a number is divisible by 5 and 11 or not.

function divisibleNumber(a){
	if(a%5==0){
		console.log("divisible by 5");
	} else if(a%11==0){
		console.log("divisible by 11");
	} else{console.log("not divisible by both");}
	}
}

console.log(divisibleNumber(4));