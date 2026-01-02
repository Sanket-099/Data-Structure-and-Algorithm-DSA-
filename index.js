//Create an array with 5 students names, after that create a  function which takes 2 parameters (allStudents &  studentName) iterate over all students and find that  specific user "studentName".

//Data stucture
const studentDatabase = ['Sanket','Avi','Gaurav','Pranshoo']

//Algorithm
function findStudent(allStudents,studentName){
    for(let i = 0; i < allStudents.length;i++){
        if(allStudents[i] === studentName){
            console.log(`Found ${studentName}`)
        }
    }
}

findStudent(studentDatabase,'Avi')