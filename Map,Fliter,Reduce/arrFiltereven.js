let arr = [1,2,3,4,5]

arr.push(8)

const result = arr.filter((element,index,arr) => {
    return  element %2 == 0
})

console.log(result)