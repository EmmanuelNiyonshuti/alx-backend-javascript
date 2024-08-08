import HolbertonCourse from "./2-hbtn_course";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try
{
    c1.name = 10;
}
catch(err)
{
    console.log(err.message);
}
try
{
    const c2 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
    console.log(c2.students);
    c2.students = 16;
}
catch(err)
{
    console.log(err.message);
}
