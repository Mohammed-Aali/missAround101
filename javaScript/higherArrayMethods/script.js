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

const agesSquare = age.map(age => Math.sqrt(age))
const agestimesTwo = age.map(age => age * 2)
console.log(agestimesTwo);


// sort
// reduce