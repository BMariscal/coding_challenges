//Reversing an array

/*Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,
takes an array as argument and produces a new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.*/





function reverseArray(arr) { //recursion
  if (arr.length === 0) return [];
    return reverseArray(arr.slice(1)).concat(arr[0]);
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];



var arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(){
return arrayValue =reverseArray(arrayValue)}; //modifies the argument itself

reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]
