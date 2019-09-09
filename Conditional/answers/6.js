//Write a program to find maximum between three numbers.

function greatestNumber(x,y,z){
        if(x<y<z){
                console.log("z is greater");
        } else if((x>y<z)&&(x<z)){
                console.log("z is greater");
        } else if((x>y<z)&&(x>z)){
                console.log("x is greater");
        } else if(x>y>z){
                console.log("x is greater");
        } else if((x<y>z)&&(x>z)){
                console.log("y is greater");
        } else if((x<y>z)&&(x<z)){
                console.log("y is greater");
        } else("All same");

}

console.log(greatestNumber(99,56,88));