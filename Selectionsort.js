function selectionsort(arr){
	let arrLen = arr.length;
	let minVal = arr[0];
	let minInd = 0;
	if(arrLen <= 1){
		return arr;
	}

	for(let i = 1; i < arrLen; i++){
		if(arr[i] < minVal){
			minVal = arr[i];
			minInd = i;
		}
	}
	let firstElem = arr[0];
	minVal = arr.splice(minInd, 1, firstElem);
	arr.splice(0, 1);
	minVal = minVal.concat(selectionsort(arr));
	return minVal;
}

let testArr = [5, 3, 4, 5, 1, 2, 7];
console.log(selectionsort(testArr));