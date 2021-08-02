function knapSnack(profits, weights, capacity) {
    const n = profits.length;
    if(n <= 0 || weights.length !== n || capacity <=0) return 0;
    const dp = new Array(n)
                    .fill(0)
                    .map(() => new Array(capacity + 1).fill(0))

    for(let c = 0; c <= capacity; c++) {
        if(c >= weights[0] ) {
            dp[0][c] = profits[0];
        }
    }

    for(let i = 1; i < n; i++) {
        for(let c = 0; c <= capacity; c++) {
            if(c >= weights[i]) {
                let profit1 = 0;
                let profit2 = 0;
    
                profit1 = profits[i] + dp[i-1][c - weights[i]];
                profit2 = dp[i-1][capacity];
    
                dp[i][c] = Math.max(profit1, profit2);
            } else {
                dp[i][c] = dp[i - 1][c]
            }
        }
    }

    let currentCapacity = capacity;
    let selected = [];
    
    for(let i = n-1; i > 0; i--) {
        if(dp[i][currentCapacity] !== dp[i-1][currentCapacity]) {
            selected.push(weights[i]);
            currentCapacity -= weights[i];

        }
    }

    if(currentCapacity > 0) selected.push(weights[0]);

    console.log(selected);

    return dp[n - 1][capacity]
}

console.log(knapSnack([3,4,5,7], [1,2,3,4], 5))