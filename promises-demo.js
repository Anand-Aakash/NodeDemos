const calculate=(value)=>{
    return new Promise((resolve,reject)=>{
        //RESOLVE-SUCCESS
        //REJECT - FAILURE/ERROR
        if(value) resolve(value + 2)
        else reject('Data is undefined')
    })
}
//Method 1
// calculate()
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))
//if resolve it will execute .then callback
//if reject it will execute .catch callback

//Method 2
const asyncfunction=async()=>{
    try{
        const data=await calculate(10)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
asyncfunction()