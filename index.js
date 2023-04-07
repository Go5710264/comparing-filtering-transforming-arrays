function compareArrays(arr1, arr2) { 
  return arr1.length === arr2.length && arr1.every(
    (currentValue, index) => currentValue === arr2[index]
  );  
}

function advancedFilter(arr) {
  return resultArr = arr.filter(
    (selectPosivive) => selectPosivive >= 1
  ).filter(
    (cardinalityCheck) => cardinalityCheck % 3 === 0
  ).map((multiplication) => multiplication * 10);  
}
