const student = {
    firstName:"Walter",
    lastName:"White",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    studentSubjects:["SQL","History"]
    //Key  : Value
}

const student2 = {
    firstName:"Bruce",
    lastName:"Wayne",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    studentSubjects:["SQL","History","Data structures"]
}

const group1088 = {
    groupNumber:"1088",
    facultyOfGroup:"Computer Science",
    countOfStudent:18,
    countOfSubject:10,
    eachSubjectLessonTime:4,
    calcGroupSubjectTime:function(percentOfSalary){
        return Math.ceil((percentOfSalary*this.countOfSubject*this.eachSubjectLessonTime)*30);
    }
}

const group1083 = {
    groupNumber:"1083",
    facultyOfGroup:"Computer Science",
    countOfStudent:18,
    countOfSubject:10,
    eachSubjectLessonTime:4,
    calcGroupSubjectTime:function(percentOfSalary){
        return Math.ceil((percentOfSalary*this.countOfSubject*this.eachSubjectLessonTime)*30);
    }
}




const subjects =[
    {
        subjectName:"Introduce Computer Science",
        description:"Description"
    },
    {
        subjectName:"Automic Machine",
        description:"Description Automic Machine"
    },
    {
        subjectName:"Artifical Intilegence",
        description:"Description Artifical Intilegence"
    }
]


console.log(`Student First Name => ${student.firstName}`)
console.log(`Student Last Name => ${student["lastName"]}`)
// console.log(`Group Faculty => ${group.facultyOfGroup}`)
// console.log(`Group Number => ${group["groupNumber"]}`)

// let findGroupByKey = prompt("write group key");
// let subjectKey = prompt("Write subject key")

// console.log(group[`${findGroupByKey}`])

// console.log(subject[`sb_${subjectKey}`])

console.log(student.fullName())
console.log(group1083.calcGroupSubjectTime(0.4))

const addSubjectForStudent=function(subjectName){
    student.studentSubjects.push(subjectName);
}
const getStudentSubjects = function(studentObj){
    for (const subject of studentObj.studentSubjects) {
        console.log(`${studentObj.firstName} ${studentObj.lastName} - ${subject}`);
    }
}
getStudentSubjects(student);
getStudentSubjects(student2);


 


console.table(subjects)

subjects.forEach((valueOfSubject)=>{
    addSubjectForStudent(valueOfSubject.subjectName);
})
getStudentSubjects(student);


let numbers = [1,2,3,4]

numbers.forEach((valueOfNumber)=>{
    console.log(valueOfNumber)
})

const printHello = (helloText)=>{
    console.log(helloText)
}
printHello("hi");

