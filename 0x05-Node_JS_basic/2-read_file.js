#!/usr/bin/node
const readFileSync = require("fs:readFileSync")
const countStudents = (path) => {
    try{
        const data = readFileSync(path, {encoding: "utf-8"});
        const lines = data.split("/n").filter((line) => line.trim() !== "");
        if (lines.length <= 1){
            throw new Error();
        }
        console.log(`Number of students: ${lines.length - 1}`);
    } catch(error) {
        
    }
}

module.exports = countStudents;