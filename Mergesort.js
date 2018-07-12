function mergesort(arr){
	let arrLen = arr.length;

	if(arrLen <= 1){
		return arr;
	}
	else{
		let midElem = Math.round(arrLen/2);
		let leftArr = [];
		let rightArr = [];

		for(i = 0; i < arrLen; i++){
			if(i < midElem){
				leftArr.push(arr[i]);
			}
			else{
				rightArr.push(arr[i]);
			}
		}

		let leftSub = mergesort(leftArr);
		let rightSub = mergesort(rightArr);

		return merge(leftSub, rightSub);
	}
}

function merge(arr1, arr2){
	let tmpArr = [];
	let inElem;;
	while(arr1.length > 0 && arr2.length > 0){
		if(arr1[0] > arr2[0]){
			inElem = arr2.splice(0, 1);
		}
		else{
			inElem = arr1.splice(0, 1);
		}
		tmpArr.push(...inElem);
	}
	if(arr1.length > 0 || arr2.length > 0){
		tmpArr = tmpArr.concat(arr1);
		tmpArr = tmpArr.concat(arr2);
	}

	return tmpArr;
}


let testArr = [5, 3, 4, 5, 1, 2, 7];
console.log(mergesort(testArr));