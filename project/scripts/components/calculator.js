function displayOnCalculator(character) { 
   const $display = document.querySelector('[data-display="operation"]');

   $display.innerText += character;
}

function clearCalculator() {
   const $display = document.querySelector('[data-display="operation"]');
   const $result = document.querySelector('[data-display="result"]');

   $display.innerText = '';
   $result.innerText = '';
}

function clearNumber() { 
   const $display = document.querySelector('[data-display="operation"]');

   const displayText = $display.innerText;
   const newDisplayText = displayText.slice(0, -1);
   $display.innerText = newDisplayText;
}

function makeOperation() { 
   const $display = document.querySelector('[data-display="operation"]');
   const $result = document.querySelector('[data-display="result"]');

   const result = eval($display.innerHTML);
   $result.innerHTML = result;
}

function initCalculator() { 
   const $numberButtons = document.querySelectorAll('[data-button-type="number"]');
   const $operatorButtons = document.querySelectorAll('[data-button-type="operator"]');

   const $equalsButton = document.querySelector('[data-button-type="equals"]');
   const $clearDisplayButton = document.querySelector('[data-button-type="clearDisplay"]');
   const $clearNumberButton = document.querySelector('[data-button-type="clearNumber"]');

   $numberButtons.forEach($button => {
      $button.addEventListener('click', () => {
         displayOnCalculator($button.innerText);
      });
   })

   $operatorButtons.forEach($button => {
      $button.addEventListener('click', () => {
         displayOnCalculator($button.innerText);
      });
   })

   $clearDisplayButton.addEventListener('click', () => {
      clearCalculator();
   })

   $equalsButton.addEventListener('click', () => {
      makeOperation();
   })

   $clearNumberButton.addEventListener('click', () => {
      clearNumber();
   })

   document.addEventListener('keydown', (event) => {
      const key = event.key;

      if (!isNaN(key)) {
         displayOnCalculator(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
         displayOnCalculator(key);
      } else if (key === 'Enter' || key === '=') {
         event.preventDefault();
         makeOperation();
      } else if (key === 'Backspace') {
         clearNumber();
      } else if (key === 'Escape' || key === 'c'){
         clearCalculator();
      } else if (key === '.' || key ===',') {
         displayOnCalculator('.');
      }
   });
}
export default initCalculator;