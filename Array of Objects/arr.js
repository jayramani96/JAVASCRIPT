let arr=[
    {
        name: "jay"
    },
    {
        num: 7
    },
    {
        age: 20
    },
    {
        city: "rajkot"
    },
    {
        food: "vegetable"
    },
    {
        hobby: "traveling"
    },
    {
        langauge: "english"
    },
    {
        gender: "male"
    },
    {
        movie: "fast-x"
    },
    {
        std: "graduate"
    }
]
for(let i=0; i<arr.length; i++){
    let x = Object.values(arr[i])
    console.log(x[0])
}
