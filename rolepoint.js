const slider1 = document.getElementById('bodyLanguageSlider');
const slider2 = document.getElementById('secondSlider');
const submitBtn = document.getElementById('submitBtn');
const sumDisplay = document.getElementById('sumDisplay');

let slider1Value = parseInt(slider1.value);
let slider2Value = parseInt(slider2.value);

slider1.oninput = function() {
  slider1Value = parseInt(this.value);
};

slider2.oninput = function() {
  slider2Value = parseInt(this.value);
};

submitBtn.onclick = function() {
  const sum = slider1Value + slider2Value;
  sumDisplay.textContent = 'Sum: ' + sum;
};