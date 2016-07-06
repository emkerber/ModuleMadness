//Javascript

//to export the random function
module.exports = {
  random: random
}

//to generate random numbers
function random(min, max) {
  return Math.random() * (max - min) + min;
};
