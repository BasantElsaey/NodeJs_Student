
const yargs = require('yargs');

const student = require('./student')

// version1
// add command

yargs.command({
    command : 'add',
    describe : 'add data', // comment

    // options command deal with
    builder:{
        id:{
            describe:'This is id for each student',
            type : 'number',
            demandOption : true // Obligatory
        }
        
    },

  
        name:{
            describe:'This is name of the student',
            type : 'string',
            demandOption : true // Obligatory
        },
    
    // json={"players":[
    //     {"name":"Messi", "goals":8},            
    //     {"name":"Ronaldo", "goals":22},
    //     {"name":"Costa", "goals":20},
    //     {"name":"Neymar", "goals":13},
    //     {"name":"Arabi", "goals":6},
    //     {"name":"Bale", "goals":3},
    //     {"name":"Toquero", "goals":0}]};
   
        degree : { describe : "degree of the student", type : 'array' , demandOption : true},

        grade : {
            describe : 'grade of the student',
            type : 'string'
        },
        
        comment : {
            describe : ' text for a comment ',
            type : 'string'
        },
    
  

    handler:() => {
        student.addData( yargs.argv.id ,  yargs.argv.name , yargs.argv.degree , yargs.argv.grade )
    }
})


yargs.command({
    command : 'delete',
    describe : 'delete data', // comment

    builder:{
        id:{
            describe:' delete id',
            type : 'number',
            demandOption : true // Obligatory
        }
        
    },
   

 

    handler  : () => {
     student.removeData(yargs.argv.id)

    }

}


)

// read

yargs.command({
    command : 'read',
    describe : 'read data', // comment
   

    builder:{
        id:{
            describe:'This is id of the student ',
            type : 'number',
            demandOption : true // Obligatory
        }
        
    },


    handler  : () => {
       student.readData(yargs.argv.id)

    }
}









)

// list
yargs.command({
    command : 'list',
    describe : 'list data', // comment

    handler  : () => {
      student.listData()

    }
}


)



yargs.command({
    command : 'update',
    describe : 'update data ', // comment --> update name by id
   builder :{
    id : {
        describe:'This is id of the student ',
        type : 'number',
        demandOption : true // Obligatory
    }
   },

  
    
    name:{
        describe:'This is name of the student',
        type : 'string',
        demandOption : true // Obligatory
    },
 

        
  


    handler  : () => {
       student.updataData(yargs.argv.id,yargs.argv.name)

    }

},

)
//console.log(yargs.argv);
yargs.parse();





