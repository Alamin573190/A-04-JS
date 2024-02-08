function monthlySavings(arrays, livingCost) {
    if( !Array.isArray(arrays) && typeof livingCost !== 'number'){
        return 'invalid input'
    }
    let totalIncome = 0;
    let totalCost = 0;
    for (const array of arrays) {
        totalIncome = totalIncome + array;
        if (array >= 3000) {
            // discount 20%
            totalCost = array * 20 / 100;
          
        }
    }   
    let remainingSaving = totalIncome - totalCost - livingCost ;
    if(remainingSaving < 0 ){
        return 'earn more';
    }
    else{
        return remainingSaving;
    }
}
const array = [900,2700,3400];
const livingCost = 10000;
console.log(monthlySavings(array,livingCost)) ;

