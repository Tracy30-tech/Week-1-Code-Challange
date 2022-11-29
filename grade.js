// Student grade generator
// Output the correct grade as follows: 

// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.


const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

rl.question("Students marks: ", function (grade) {
    //    prompt user to input Students marks
    let marks = parseInt(grade, 10);
    if (marks > 79) {        // check condition for grade generation
        process.stdout.write("A\n");
    } else if (marks >= 60) {
        process.stdout.write("B\n");
    } else if (marks >= 49) {
        process.stdout.write("C\n");
    } else if (marks >= 40) {
        process.stdout.write("D\n");
    } else {
        process.stdout.write("E\n");
    }
    rl.close();
});
