function sortArray(array = []){    
    let newArray = [];
	let numArray = [];
	let strArray = [];
    let subArray = [];
    
    array.sort(); //sort source array alphabetically
    array.sort((a,b) => a < b ? -1:0); //sort source array numerically
    for (let i=0; i < array.length; i++) {
        let item = array[i];
        let nextItem = array[i+1];
        
        if (item === nextItem) subArray.push(item); //add to subArray        
        else {
            if (subArray.length > 0) {
                subArray.push(item); //current item is same as previous item
                if (typeof(item) === 'number') numArray.push(subArray); //save subArray to numArray
				else if (typeof(item) === 'string') strArray.push(subArray); //save subArray to strArray
				else numArray.push(subArray); //save subArray to newArray
                subArray = []; //purge subArray
            } else { //no reocurrence
				if (typeof(item) === 'number') numArray.push(item); //add item to numArray
				else if (typeof(item) === 'string') strArray.push(item); //add item to strArray
				else newArray.push(item); //add item to newArray    			
            }
        }        
    }
	if (numArray.length > 0) newArray.push(numArray);
	if (strArray.length > 0) newArray.push(strArray);
    return newArray;
}
