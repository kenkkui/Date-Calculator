// Current Date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

// Inputs
const dayInput = document.querySelector('.js-day-input');
const monthInput = document.querySelector('.js-month-input');
const yearInput = document.querySelector('.js-year-input');

// Calculations
const day = 1;
const year = [day*31, day*28, day*31, day*30, day*31, day*30, day*31, day*31, day*30, day*31, day*30, day*31];
let yearInputDays = 0;
let monthDiffDays = 0;
let yearCurrentDays = 0;

//Outputs
const dayOutput = document.querySelector('.js-day-output');
const monthOutput = document.querySelector('.js-month-output');
const yearOutput = document.querySelector('.js-year-output');


console.log(`For those curious and happen to be checking the log, i am converting your inputs into days so i get an accurate number, then adding extra days to this result considering leap years. After this i convert the current date to days, also adding extra days considering the leap years, then i compare the difference betweem the to dates and convert them each back into: years, months, and days to give you the result!`)
yearInput.value = 1984;
monthInput.value = 2;
dayInput.value = 15;


function calculate() {
  // Input date
  /*
  const outputLeapYearCalc = [];
  let leapYear = day*0;
  const leapYearCalc = [4, 100, 400]
  for (let i = 0; i < leapYearCalc.length; i++) {
    const resultCalc = Math.floor(yearInput.value / leapYearCalc[i]);
    outputLeapYearCalc.push(resultCalc);
  };
  leapYear = outputLeapYearCalc[0] - outputLeapYearCalc[1] + outputLeapYearCalc[2];
  */
 
  let daysInNormYear = 0;
  for (let i = 0; i < year.length; i++) {
    daysInNormYear += year[i];
  };
  yearInputDays = (yearInput.value * daysInNormYear);

  let monthInDays = 0;
  for (let i = 0; i < year.length && i < monthInput.value - 1; i++) {
     monthInDays += year[i]
  };

  let daysInDays = 0;
  daysInDays += parseInt(dayInput.value);

  const inputDate = parseInt(yearInputDays + monthInDays + daysInDays);
  console.log(inputDate)


  //Current date
  /*
  const currentOuputLeapYearCalc = [];
  for (let i = 0; i < leapYearCalc.length; i++) {
    const currentResultCalc = Math.floor(currentYear / leapYearCalc[i]);
    currentOuputLeapYearCalc.push(currentResultCalc);
  };
 const leapYearCurrent = currentOuputLeapYearCalc[0] - currentOuputLeapYearCalc[1] + currentOuputLeapYearCalc[2]; */
  yearCurrentDays = (currentYear * daysInNormYear);
  

  let currentMonthinDays = 0;
  for (let i = 0; i < year.length && i < currentMonth - 1; i++) {
    currentMonthinDays += year[i]
  }
  
  let currentDaysInDays = 0;
  currentDaysInDays += currentDay;

  const currentDate = yearCurrentDays + currentMonthinDays + currentDaysInDays;
  console.log(currentDate);

  //get the difference between the two dates in days
  const dateDiff = currentDate - inputDate;
  console.log(`=${dateDiff}`)

  // get the year result
  const yearDiff = Math.floor(dateDiff / 365);
  console.log(`/ 365 =${yearDiff}`)
  yearOutput.innerHTML = `${yearDiff} `;
  
  //after getting year result, get the months, so find the remainder
  const remainderYear = yearDiff * 365;
  console.log(`${dateDiff} - ${remainderYear}`)

  // month remainder
  let remainderDay = dateDiff - remainderYear;
  const remainderDayNew = remainderDay;
  console.log(`= ${remainderDay}`)


  let monthCount = 0;
  let monthResultOutput = 0;
  let monthCountDays = 0;
  for (let i = 0; i < year.length; i++) {
    if (remainderDay > 0) {
      remainderDay -= year[i]
    } else {
      monthCount = i - 1;
      for (let i = 0; i < year.length && i < monthCount; i++) {
        monthCountDays += year[i];
        monthResultOutput++;
        console.log(monthResultOutput, year[i])
      }
      console.log(monthCountDays)
      break;
    }
  }

  monthOutput.innerHTML = `${monthResultOutput} `;

  const dayResultOutput = remainderDayNew - monthCountDays;
  dayOutput.innerHTML = `${dayResultOutput} `
}



// currentTimeHTML()

// function currentTimeHTML() {
//   const timeElem = document.querySelector('.js-current-time')

//   timeElem
//     .innerHTML = `
//     <div class="current-time">
//       <div class="current">
//         <div class="name-time"></div>
//         <p>${currentDate}</p>
//       </div>

//       <div class="current">
//         <div class="name-time"></div>
//         <p></p>
//       </div>

//       <div class="current">
//         <div class="name-time"></div>
//         <p></p>
//       </div>
//     </div>
//     `
// }
