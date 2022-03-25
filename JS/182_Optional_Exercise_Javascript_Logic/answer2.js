function findWhichSum(array = [], sum = 0) {
    let answer = [];
    
    for (let i=0; i < array.length; i++) {
        for (let j=i+1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                answer.push(array[i]);
                answer.push(array[j]);
                return answer;
            }            
        }        
    }
    return answer;
}
