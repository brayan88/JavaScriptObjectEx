/**
 * Created by el on 15.10.2016 г..
 */
function usernames(input) {
    let catalogue = new Set();
    for (let i = 0; i < input.length; i++) {
         catalogue.add(input[i]);
    }
    let catalogueArr=[...catalogue];
    console.log(catalogueArr.sort(sortedViaLength).join("\n"));
    function sortedViaLength(a,b) {
        let result = a.length-b.length;
        if(result===0)
            return a.localeCompare(b)
        return result;
    }
}
usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'])