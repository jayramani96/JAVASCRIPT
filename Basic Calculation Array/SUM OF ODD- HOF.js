let arr = [1, 2, 3, 4,5]
let sum = arr.reduce((accumalator, element)=>{
    if(element % 2 !== 0){
        return accumalator + element;
    }
    return accumalator;
},0)
console.log(sum);