let arr = [1,2,3,4]

let y = arr.reduce((accumulator,currentValue)=>{
    return accumulator = accumulator * currentValue
},1)

console.log(y)