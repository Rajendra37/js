console.log("modern java script");

const student ={
    name: "Rajendra",
    age: 24,
    projects:{
        dicegame:"two player game using javascript"
    }
}
//console.log(student);

const{name,age,projects:{dicegame}}=student;
console.log(name,age,dicegame);