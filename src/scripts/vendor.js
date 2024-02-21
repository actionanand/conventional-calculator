export const outputResult = (result, text) => {
  const currentResultOutput = document.getElementById('current-result');
  const currentCalculationOutput = document.getElementById('current-calculation');

  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
};
