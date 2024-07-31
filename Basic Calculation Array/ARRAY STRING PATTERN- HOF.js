let string = ["assignment", "problem", "media", "upload"]
let firstOrLastChar = string.filter((string,index)=>{
    return string.startsWith('a') || string.endsWith('a')
})
console.log(firstOrLastChar);