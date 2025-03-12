let array = [5,1,2,6,3];

let largest = array[0];
let secondlargest = largest;
let third = secondlargest;

for ( let i = 0; i < array.length ; i++){
    if ( array[i] > largest){
       
        secondlargest = largest;
        largest = array[i];
    }
}
console.log("Largest and secondlargest:",largest,secondlargest);