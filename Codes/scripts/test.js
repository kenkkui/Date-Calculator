function checkError() {
  // Day
  if (userInputDay.value === '') {
    errorDay.innerHTML = 'This field is required';
  } else if (userInputDay.value <= 31 && userInputDay.value >= 0) {
    errorDay.innerHTML = '';
    const varInputDate = userInputDay.value;
    you
    const calculatedDate = varInputDate - day;
    
    console.log(calculatedDate)
  } else {
    errorDay.innerHTML = 'Must be a valid day'
  }

  // Month
  if (userInputMonth.value === '') {
    errorMonth.innerHTML = 'This field is required';
  } else if (userInputMonth.value <= 12 && userInputMonth.value >= 0) {
    errorMonth.innerHTML = '';
    const varInputMonth = userInputMonth.value;
  } else {
    errorMonth.innerHTML = 'Must be a valid month'
  }

  // Year
  if (userInputYear.value === '') {
    errorYear.innerHTML = 'This field is required';
  } else if (userInputYear.value < year) {
    errorYear.innerHTML = '';
    const varInputYear = userInputYear.value;
    const resultAddDays = Math.floor((year - varInputYear) / 4);
    const dateSpan = document.querySelector('.js-result-days');
    const resultYears = year - varInputYear;

    document.querySelector('.js-result-years').innerHTML = resultYears;

    dateSpan.innerHTML = resultAddDays;
  } else {
    errorYear.innerHTML = 'Must be in the past'
  }
};