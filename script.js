const hairColorInput = document.getElementById('hairColor');
const colorPaletteSelect = document.getElementById('colorPalette');
const hairStyleSelect = document.getElementById('hairStyle');
const hairDiv = document.getElementById('hair');
const resetButton = document.getElementById('resetButton');

function updateHairColor(color) {
  hairDiv.style.backgroundColor = color;
}

function updateHairStyle(style) {
  hairDiv.className = style;
}

hairColorInput.addEventListener('input', function() {
  updateHairColor(this.value);
});

colorPaletteSelect.addEventListener('change', function() {
  updateHairColor(this.value);
});

hairStyleSelect.addEventListener('change', function() {
  updateHairStyle(this.value);
});

resetButton.addEventListener('click', function() {
  hairColorInput.value = '#000000';
  colorPaletteSelect.value = '#000000';
  hairStyleSelect.value = 'short';
  updateHairColor('#000000');
  updateHairStyle('short');
});
