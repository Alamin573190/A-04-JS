
// Problem-02: Good Name , Bad Name

function checkName(names) {
    if (typeof names !== "string") {
        return 'invalid';
    };
    if (names.toLowerCase().endsWith('a') || names.toLowerCase().endsWith('y') || names.toLowerCase().endsWith('i') || names.toLowerCase().endsWith('e') || names.toLowerCase().endsWith('o') || names.toLowerCase().endsWith('u') || names.toLowerCase().endsWith('w')) {
        return 'Good Name';
    };
    return 'Bad Name';
}
const checkTheName = checkName("RasheW");
console.log(checkTheName);