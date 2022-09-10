const fs = require('fs')
const yargs = require('yargs')

// function header
const loadData = () => {
    try{
        // array of json

        const data = fs.readFileSync('student.json').toString()
        // array of json --> array of object 
        return JSON.parse(data)
    }
    catch(e){
        return []
    }

}


const saveData = (data) =>{

    const savedata = JSON.stringify(data)
    fs.writeFileSync('student.json',savedata)

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function addData

const addData = (id,name,degree,grade,comment) =>{
    const student = loadData()
    const addstu = student.filter((el)=>{
    
        return el.id === id
        
   
    })

    
  
    if(addstu.length==0){

     degree = [90,70,85]
     degree = [71,80,74]
     degree = [75,88,98]
     
        let total = 0
        for(i in degree){
            total += degree[i]
            
        }

        // way 1 is to for in on each element in array --> degree --> code is right but output results type--> string

        // let total = 0
        // for(i in degree){
        //     total += degree[i]
            
        // }

         // way 2 is to for each on each element in array --> degree --> code is right but output results type--> string

    //     let total = 0
    // degree.forEach((el) => {
    //     total += el
    // });

        student.push({
           id,
           name,
           degree,
           grade,
           comment,
           total // total : total
        })
       
        saveData(student)
        return console.log(' Data Is Saved successfully')
    }
    else{
        console.log('student exists please rewrite a different one')
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delete function
const removeData = (id) => {
const student = loadData()
const studentDelete = student.find((el)=>{

    return el.id === id
})  
console.log(studentDelete) // undefined 


if(studentDelete){
   
    const stuDelete = student.filter((el) =>{
        return el.id !== id
    })
    saveData(stuDelete)
    console.log('Student is deleted successfully')
}
    else{
        console.log('Not found')
    }


    // this way gives me an error 

    // const index = student.indexOf(studentDelete)
    // console.log(index) // 2
    // student.splice(1,1)
    // saveData(student)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Read Function
const readData = (id) =>{
    const student = loadData()
    const studentRead = student.filter((el)=>{
        return el.id === id
       
    })
  if(!studentRead.length==0){
    console.log(studentRead)
    
  }
  else{
    console.log('student is not found')
  }
} 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// list function
const listData = () =>{
    const student = loadData()
    if(student.length!==0){
    // student.forEach((el)=>{

      for(el in student){
        console.log(student[el])
      }
    }else{
        console.log('sorry nothing is shown')
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// update function

// 1- I see if id which I enter is old id or not
// 2- If studentUpdate has a value --> change old name ..> new name
// 3- use filter to see old id if is not new id
// 4- I start to add new update and save it and print it 
// 5- if studentUpdate doesn't have a value --> error  happened --> no update

const updataData = (id,name) => {
    const student = loadData()
         const studentUpdate = student.find((el) =>{
            return  el.id === id
         })
            if(studentUpdate ){
                studentUpdate.name = name 
                const addName = student.filter((el) =>{
                   return el.id !== id

                })
                addName.push(studentUpdate)
                saveData(addName)
                console.log('Update is done successfully')

            }else{
                console.log('Sorry no update done')
            }
        
}


module.exports = {
    addData,
    removeData,
    readData,
    listData,
    updataData
   
    
}