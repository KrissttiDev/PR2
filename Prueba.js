function solution(N, A) {
    let counters = new Array(N).fill(0);
    
    let maxCounter = 0;
   
    let maxToSet = 0;
    
    for (let i = 0; i < A.length; i++) {
        let X = A[i] - 1;
        
        if (X === N) {
            
            maxToSet = maxCounter;
        } else if (0 <= X && X < N) {
            
            counters[X] = Math.max(counters[X] + 1, maxToSet + 1);

            maxCounter = Math.max(counters[X], maxCounter);
        }
    }
    
    counters = counters.map((val) => Math.max(val, maxToSet));
    return counters;
}

console.log(solution(5,[1,1,4,6,1,5,5]));