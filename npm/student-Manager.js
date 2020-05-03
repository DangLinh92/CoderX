/*
1. show all students
2. create new student
3. save and exist 
*/
var readlineSync = require('readline-sync'); 
var fs = require('fs');
var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./studentData.json');
    students.push(JSON.parse(fileContent));
    console.log(students);
}

function showMenu(){
 console.log('1. Show all students');
 console.log('2. Create new student');
 console.log('3. save and exist');

 var option = readlineSync.question('> ');
    switch(option)
    {
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExist();
            break;
            default:
                console.log('wrong option');
                showMenu();
                break;
    }
}

function showStudents(){
    for(var student of students){
        console.log(student.name,student.age);
    }
}

function showCreateStudent(){
    var name = readlineSync.question('Name:');
    var age =  readlineSync.question('Age:');
    var student = {
        name : name,
        age : parseInt(age)
    }
    students.push(student);
}

function saveAndExist(){
    var data = JSON.stringify(students);
    fs.writeFileSync('./studentData.json',data);
    console.log('save success!');
}

function Main()
{
    loadData();
    showMenu();
}
Main();