const maxProfit = (prices) => {
    let minPrice = prices[0]
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice,currentPrice)

        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit,potentialProfit)
        // console.log(maxProfit);
    }
    return maxProfit 

};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
// console.log('Maximum profit',profit);

// -------------------------------------------------------------------------
//Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.


const arrayChunk =( array,size) =>{
 
}