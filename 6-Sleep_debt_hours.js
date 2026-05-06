// Returns the number of hours slept for a given day
const getSleepHours = (day) => {
  day = day.toLowerCase();

  if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day ===  'thursday' || day === 'friday') {
    return 12;
  } else if (day === 'saturday' || day === 'sunday') {
    return 8;
  }
}

// Returns the total hours actually slept for a given day

const getActualSleepHours = () => {
  
  let totalHoursSlept = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

  return totalHoursSlept;
}

// Get the ideal sleep hours goal

const getIdealSleepHours = () => {

  let idealHours = 56;
  return idealHours;
}

console.log(`"I ideally wish to sleep an average of ${getIdealSleepHours()} hours per week."`);

// Calculate sleep debt, if any

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep this week, good job going to bed early !';
  } else if (actualSleepHours > idealSleepHours) {
    return 'You got more sleep than needed, are you alright ?';
  } else if (actualSleepHours < idealSleepHours) {
    return 'You did not get enough sleep this week, you are advised to consider resting more.';
  } else {
    return null, 'An error has occured';
  }
}

// Log the sleep debt calculations's results

console.log(`According to our calculations, this week, you had a total of ${getActualSleepHours()} hours of sleep. ${calculateSleepDebt()}`);







