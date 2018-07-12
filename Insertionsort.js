function insertionsort(arr){
	let arrLen = arr.length;

	for(let i = 1; i < arrLen; i++){
		for(let j = 0; j < i; j++){
			if(arr[i] < arr[j]){
				arr.splice(j, 0, arr[i]);
				arr.splice(i + 1, 1);
				break;
			}
		}
	}

	return arr;
}

let testArr = [5, 3, 4, 5, 1, 2, 7];
console.log(insertionsort(testArr));