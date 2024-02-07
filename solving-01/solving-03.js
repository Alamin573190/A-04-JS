// ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
// নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
// elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
// তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
// রি টার্ন করবে [ 1 , 12 , 0 , -1 ]

function deleteInvalids(numbers) {
    if (!Array.isArray(numbers)) {
        return '"you should input typeof array"';
    }
    let numberArray = [];
    for (const number of numbers) {
        if (typeof number === 'number' && !isNaN(number)) {
            numberArray.push(number);
        }
    }
    return numberArray;
}
const array ={num: [ 1 , 2 , 3 ]};
console.log(deleteInvalids(array));