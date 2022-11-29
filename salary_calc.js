/*
    Net salary calculator:
     Gross salary = all_benefits + basic salary
     tax = Gross salary - previous paye
     total deductions = (paye + NHIF + NSSF)
    Net salary = Gross salary - total deductions i.e Gross salary - (paye + NHIF + NSSF) 
    
*/

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

rl.question("Gross salary: ", function (gross_salary) {
    //    prompt user to input Gross salary
    let paye;
    let tax;
    let nhif;
    // Monthly nssf deductions
    let nssf = 400;
    let total_deductions;
    let net_salary;

    // check condition for paye calculation
    if (gross_salary < 24001) {
        paye = gross_salary * 0.1;
    } else if (gross_salary < 32334) {
        paye = 2400;
        tax = gross_pay - 24000
        paye = (tax * 0.25) + paye;
    } else {
        paye = 4483;
        tax = gross_salary - 32333;
        paye = (tax * 0.30) + paye;
    }

    // check condition for nhif total_deductions
    if (gross_salary < 6000) {
        nhif = 150;
    } else if (gross_salary < 8000) {
        nhif = 300;
    } else if (gross_salary < 12000) {
        nhif = 400;
    } else if (gross_salary < 15000) {
        nhif = 500;
    } else if (gross_salary < 20000) {
        nhif = 600;
    } else if (gross_salary < 25000) {
        nhif = 700;
    } else if (gross_salary < 30000) {
        nhif = 850;
    } else if (gross_salary < 35000) {
        nhif = 900;
    } else if (gross_salary < 40000) {
        nhif = 1000;
    } else if (gross_salary < 45000) {
        nhif = 1100;
    } else if (gross_salary < 50000) {
        nhif = 1200;
    } else if (gross_salary < 60000) {
        nhif = 1300;
    } else if (gross_salary < 70000) {
        nhif = 1400;
    } else if (gross_salary < 80000) {
        nhif = 1500;
    } else if (gross_salary < 90000) {
        nhif = 1600;
    } else {
        nhif = 1700
    }

    total_deductions = nhif + paye + nssf;
    net_salary = gross_salary - total_deductions;
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);

    rl.close();
});
