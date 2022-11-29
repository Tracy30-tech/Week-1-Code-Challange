// program inputs speed of car;

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)
    
rl.question("Speed of car: ", function (speed){ 
    //    prompt user to Speed of car
    let speed_of_car = parseInt(speed, 10);
    if (speed_of_car < 70){    // check condition for speed detection
        process.stdout.write("Ok!\n");
       } else{
        const demerit = ((speed_of_car - 70) / 5);
        Math.ceil(demerit);
        process.stdout.write(`Points: ${demerit}\n`);
            if (demerit >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                process.exit(0);                
            }
       }
    rl.close();
})
