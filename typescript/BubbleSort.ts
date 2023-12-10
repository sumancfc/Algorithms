/* Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjecent elements if they are in the wrong order. 
This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

Bubble Sort Algorithm::
       -> traverse from left and compare adjecent elements and the higher one is placed at right side.
       -> in this way, the largest element is moved to the right most end at first.
       -> this process is then continued to find the second largest element and place it and so on until the data is sorted.
*/

function bubbleSort(arr: number[]): number[] {
  let num = arr.length;
  for (let i = 0; i < num - 1; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const array: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array", bubbleSort(array)); //Ans: Sorted Array [11, 12, 22, 25, 34, 64, 90]
