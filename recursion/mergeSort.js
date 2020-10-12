function mergeSort(array) {
    if (array.length === 1 || array.length === 0) {
      return array;
    }
  
  
    mid = Math.floor(array.length/2);
    let sortedArray = merge(
      mergeSort(array.splice(0, mid)),
      mergeSort(array)
    )
  
    return sortedArray;
  }
  
  function merge(LArray, RArray) {
    let lIndex = 0;
    let rIndex = 0;
    let mergeArray = [];
  
    while(lIndex < LArray.length && rIndex < RArray.length) {
      if (LArray[lIndex] > RArray[rIndex]) {
        mergeArray.push(RArray[rIndex]);
        rIndex++;
      } else {
        mergeArray.push(LArray[lIndex]);
        lIndex++;
      }
    }
  
    mergeArray = mergeArray.concat(LArray.slice(lIndex)).concat(RArray.slice(rIndex));
  
    return mergeArray;
  }
  
  const sort = mergeSort([2,6,4,1,9,3,0,8,5]);
  console.log(sort)