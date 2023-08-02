let youthRaceNumber = Math.floor(Math.random() * 1000);
let lateAdultRaceNumber = Math.floor(Math.random() * 1000);
let earlyAdultRaceNumber = Math.floor(Math.random() * 10000);
var runnerRegisteredEarly = true;
var runnerAge = 33; 

  if (runnerRegisteredEarly && runnerAge > 18){
    console.log('Early adults start at 9:30am & your number is: ' + earlyAdultRaceNumber);
} else if (!runnerRegisteredEarly && runnerAge > 18) {
    console.log('Late adults run at 11:00 am & your number is: ' + lateAdultRaceNumber);
} else if (runnerAge < 18 && youthRaceNumber){
    console.log('If you are under 18 you will race at 12:30pm ' + youthRaceNumber);
}
