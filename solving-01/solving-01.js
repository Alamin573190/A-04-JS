
// Problem-01 : Help The Zoo Manager

function calculateMoney(numbers){
    if (numbers <= 0){
        return " 'you should be input positive number' ";
    }
    const ticketPrice = 120;
    const totalTicketPrice = 120 * numbers;
    const cureTakerFee = 500;
    const totalLunchCost = 8 * 50;
    const dailyCost = cureTakerFee + totalLunchCost;
   const profit = totalTicketPrice -dailyCost;
   return profit;
}
const profitTaka = calculateMoney(-130);
console.log(profitTaka);