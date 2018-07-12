function quicksort(arr){
	let arrLen = arr.length;

	if(arrLen <= 1){
		return arr;
	}
	else{
		//this picks a pivot that is the median of the first, middle, and last elem	
		let lastInd = arrLen - 1;
		let midInd = Math.floor(lastInd/2);
		let firstElem = arr[0];
		let midElem = arr[midInd];
		let lastElem = arr[lastInd];
		let tmpElem;

		if(midElem < firstElem){
			tmpElem = midElem;
			midElem = firstElem;
			firstElem = tmpElem;
		}
		if(lastElem < firstElem){
			tmpElem = lastElem;
			lastElem = firstElem;
			firstElem = tmpElem;
		}
		if(midElem < lastElem){
			tmpElem = lastElem;
			lastElem = midElem;
			midElem = tmpElem;
		}
		
		let pivot = lastElem; //pivot should be median of the three
		
		//recursively calls quicksort on two subarrays
		let leftArr = [];
		let rightArr = [];
		let eqArr = [];

		for(let i = 0; i < arrLen; i++){
			if(arr[i] < pivot){
				leftArr.push(arr[i]);
			}
			else if(arr[i] == pivot){
				eqArr.push(arr[i]);
			}
			else{
				rightArr.push(arr[i]);
			}
		}
		let leftSorted = quicksort(leftArr);
		let rightSorted = quicksort(rightArr);
		return([...leftSorted, ...eqArr,...rightSorted]);
	}
}

let arr1 = [3, 4, 8, 4, 5, 1, 6];
let arr2 = [8];
console.log(quicksort(arr1));