function bubblesort(arr){
	let arrLen = arr.length;
	let switchCount = 1;

	while(switchCount > 0){
		switchCount = 0;
		let switchLess, switchGreat;
		for(let i = 0; i < arrLen; i++){
			if(arr[i+1] < arr[i]){
				switchLess = arr.splice(i+1, 1);
				switchGreat = arr.splice(i, 1, ...switchLess);
				arr.splice(i+1, 0, ...switchGreat);
				switchCount += 1;
			}
		}
	}

	return arr;
}

let testArr = [5, 3, 4, 5, 1, 2, 7];
console.log(bubblesort(testArr));