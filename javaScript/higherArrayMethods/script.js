let companeis = [
    {name: "compane one", carogory: "finance", start: 1981, end: 2003 },
    {name: "compane two", carogory: "retail", start: 1992, end: 2008 },
    {name: "compane three", carogory: "auto", start: 1999, end: 2007 },
    {name: "compane four", carogory: "retail", start: 1989, end: 2010 },
    {name: "compane five", carogory: "tech", start: 2009, end: 2014 },
    {name: "compane six", carogory: "finance", start: 1987, end: 2010 },
    {name: "compane seven", carogory: "auto", start: 1986, end: 1996 },
    {name: "compane eight", carogory: "tech", start: 2011, end: 2016 },
    {name: "compane nine", carogory: "retail", start: 1981, end: 1989 }
]
const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// basic for loop
// for (let i = companeis.length - 1; i > -1; i--) {
//     console.log(companeis[i].carogory)
// };

// foreach
// companeis.forEach(function(company) {
//     console.log(company.name)
// })

// basic for loop
// let older = [];
// for (let i = 0; i < age.length; i++) {
//     if (age[i] >= 21) {
//         older.push(age[i])
//     } 
// }
// console.log(older);

// filter crazy short
// let older = age.filter(age => age >= 21);

// filter normal
// let above1 = age.filter(age => {
//     if (age >= 21) {
//         return true;
//     }
// });
// console.log(older);
// console.log(above1);

//filter the reatail companies crazy short
// let retails = companeis.filter(company => company.carogory === "retail")
// console.log(retails);

//fitler the companies normal length
// let retials1 = companeis.filter(function(company) {
//     if(company.carogory == "retail") {
//         return true;
//     }
// })
// console.log(retials1);

//filter all the companies from the eighties

// const eighties = companeis.filter(company => company.start < 1990 && company.start >= 1980);
// console.log(eighties)

// filter companies that lasted ten or more years
// let last = companeis.filter(company => (company.end - company.start) >= 10)
// console.log(last)

// map
// create array of company names the normal way
// const companyNames = companeis.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// })
// console.log(companyNames);

//create an array the crazy short way
// const companyName = companeis.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(companyName);

// map is the king of creating new array and missing with them
// const agesSquare = age
//     .map(age => age + 1.5)
//     .map(age => age * 2)
// console.log(agesSquare);


// sort

// sorting companies by start year
// const sortedCompanies = companeis.sort(function(company1, company2) {
//     if(company1.start > company2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// sorting copanies the crazy short way
// const sortedCompanies1 = companeis.sort((a, b) => (a.start > b.start ? 1 : -1))

// console.log(sortedCompanies1)
// // sort ages
// // normal crazy short way of doing it
// const ageSorted = age.sort((a, b) => a > b ? 1 : -1);
// // even shorter than crazy short 
// const ageSortUp = age.sort((a, b) => a - b);
// console.log(ageSorted)
// console.log(ageSortUp)

// reduce
//normal for loop
// let ageSum = 0;
// for(let i = 0; i < age.length; i++) {
//     ageSum+= age[i];
// }

// normal length
// const ageSum = age.reduce(function(total, age) {
//     return total + age;
// }, 0)
// // crazy short length
// const ageSum1 = age.reduce((total, age) => total + age, 0);

// get total years for all companies
// const totalYears = companeis.reduce(function(total, company) {
//     return total + (company.end - company.start)
// }, 0)

// doing it the crazy short way
// const totalYears1 = companeis.reduce((total, company) => total + (company.end - company.start), 0);

// combine methods

const combine = age
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);

console.log(combine)