const numbersButtons = document.querySelectorAll('.numbers-box');
const operationsButtons = document.querySelectorAll('.operations');
let res = 0;

numbersButtons.forEach((button) => {
    button.addEventListener('click',(e) =>
    {
        const numbers = button.querySelector('span').textContent;
        console.log(numbers);
        insertValueOperations(numbers);
        res = parseInt(numbers); 
        console.log(res);

        

    })
});


operationsButtons.forEach((button) => {

    button.addEventListener('click',(e) =>
    {
        const operations = button.querySelector('span').innerText;
        console.log(operations);
        insertValueOperations(operations);
    })
});

function insertValueOperations(valueOperations) {
    const input = document.getElementById('calculatorInput');
    input.value += valueOperations;// Agrega el valor al final del input

    const numerArray = ['1','2','3','4','5','6','7','8','9','0','00','.'];
    console.log(numerArray);
           
        for(let i=0;numerArray.length;i++)
        {
            if(valueOperations == numerArray[i])
                {
                    console.log("Es numero");
                    break;
                }
                else{
                    console.log("Es operador");
                    
                }

        }
        
  }




