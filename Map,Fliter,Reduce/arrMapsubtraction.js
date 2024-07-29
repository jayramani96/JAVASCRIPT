let arr = [1,2,3,4,5]

arr.push(6)

const result = arr.map((element,index,arr) => {
    return  element + 2
})

console.log(result)