//even

let arr = [1,2,3,4,5]

arr.push(8)

const result = arr.filter((element,index,arr) => {
    return  element %2 == 0
})

console.log(result)

//odd

let arr2 = [1,2,3,4,5]

arr.push(8)

const result2 = arr2.filter((element,index,arr) => {
    return  element %2 != 0
})

console.log(result2)