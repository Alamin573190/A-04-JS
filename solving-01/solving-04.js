// Problem 04 : Make A Great Password

function password(obj) {
    const numToString = pass.birthYear.toString();
    const length =numToString.length;
    if (!('name' in pass) || !('siteName' in pass) || !('birthYear' in pass) || (length !== 4) ) {

        return 'invalid';
    }
    else {
        const valuesOfSiteName = pass.siteName[0].toUpperCase() + pass.siteName.slice(1);
        const result = valuesOfSiteName + '#' + pass.name + '@' + pass.birthYear;
        return result;
    }
}
const pass = { name: 'maisha' , birthYear: 2002 };
console.log(password(pass));
