function memo(memo, formula) {
    let recur = function(n) {
        let result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur,n);
            memo[n] = result;
        }
        return result
    }
    return recur
}

let fibonacci = memo([0,1], function(recur, n){
    return recur(n-1) + recur(n-2);
})