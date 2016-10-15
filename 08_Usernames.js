/**
 * Created by el on 15.10.2016 г..
 */
function usernames(input) {
    let unique = new Set();
    let newStr ="";
    let arr=[];
    for (let i = 0; i < input.length; i++) {
        let currArr = JSON.parse(input[i]).sort((a,b)=>b-a).map(Number);
        for (let j = 0; j < currArr.length; j++) {
            let number = currArr[j];
            if(j!=currArr.length-1)
                newStr+=number+", ";
            else
                newStr+=number;
        }
        arr.push(newStr.trim());
        newStr="";
    }
    arr.sort((a,b)=>a.length-b.length);
    arr.forEach(x=>unique.add(x));
    for(let el of unique)
        console.log("["+el+"]")

}
usernames([
     '[-3, -2, -1, 0, 1, 2, 3, 4]',
     '[10, 1, -17, 0, 2, 13]',
     '[4, -3, 3, -2, 2, -1, 1, 0]'
]);