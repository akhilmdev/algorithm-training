function quickSort(array) {
    
    let startIndex = 0;
    let pivotIndex = array.length - 1;
    while (startIndex < pivotIndex) {
      if (array[pivotIndex] > array[startIndex]) {
        startIndex++;
      } else if (startIndex === pivotIndex - 1){
        const temp = array[pivotIndex - 1];
        array[pivotIndex - 1] = array[pivotIndex];
        array[pivotIndex] = temp;
      } else {
        const temp = array[pivotIndex - 1];
        array[pivotIndex - 1] = array[pivotIndex];
        array[pivotIndex ] = array[startIndex];
        array[startIndex] = temp;
        pivotIndex--;
      }
    }
    if (array.length <= 2) return array;
    else {
        
        let left = quickSort(array.slice(0, pivotIndex))
        let right = quickSort(array.slice(pivotIndex));
        return [...left, ...right];
    }
  }
  
  const sort = quickSort([2,6,9,4,1,3,8,5, 0]);
  console.log(sort);