const numbersButtons = document.querySelectorAll('.numbers-box');
const operationsButtons = document.querySelectorAll('.operations');




let result = 0;
var NumbersInt1 = 0;
var NumbersInt2 = 0;
var aux = '';
var aux2 = 0;
var aux3 = 0;
var boolean = true;
var arrayOperations1 = [];
var arrayOperations2 = [];
const numerArray2 = ['1','2','3','4','5','6','7','8','9','0','00','.'];
const operatorArray2 = ['%','-','/','+','√','X','x2','1/x'];

{/**Boton */}
numbersButtons.forEach((button) => {
    button.addEventListener('click',(e) =>
    {
        const numbers = button.querySelector('span').textContent;
       // insertValueOperations(numbers);

        

        for(var i=0;i<numerArray2.length;i++)
        {
            if(numbers == numerArray2[i])
            {
            arrayOperations1.push(parseInt(numbers));
            aux2 = NumbersInt1 = parseInt(arrayOperations1.join(''));
            console.log("Entro al numero");
            console.log(NumbersInt1);
            }
         
        }
         for(var i=0;i<operatorArray2.length;i++)
        {
            if(numbers == operatorArray2[i])
            {
                aux = numbers;
             
               
                
                aux = operatorArray2[i];
                console.log(aux + " Entro");
                arrayOperations2.push(parseInt(numbers));
                NumbersInt2 = parseInt(arrayOperations2.join(''));



                

            }

        }



      

        

    })
});




operationsButtons.forEach((button) => {

    button.addEventListener('click',(e) =>
    {
        const operations = button.querySelector('span').innerText;
       // console.log(operations);
        insertValueOperations(operations);

        
    })
});



function insertValueOperations(valueOperations) {
    const input = document.getElementById('calculatorInput');
    input.value += valueOperations;// Agrega el valor al final del input

    const numerArray = ['1','2','3','4','5','6','7','8','9','0','00','.'];
   // console.log(numerArray);
           
      
        
  }




