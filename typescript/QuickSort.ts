/*
Quick Sort: It is a sorting algorithm based on divide and conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
*/

function quickSort(arr: number[]): number[] {
  let num: number = arr.length;

  if (num <= 1) return arr;

  const pivot: number = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i: number = 1; i < num; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr: number[] = [10, 7, 8, 9, 1, 5];
console.log("Sorted Array:", quickSort(arr));
