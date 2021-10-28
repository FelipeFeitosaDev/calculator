(function(){

    
    function createCalculator(){
        return {
           display: document.querySelector('.display'), 
           turnOn(){
               this.mouseClick();
           },
           mouseClick(){
               document.addEventListener('click', e => {
                   const clicked = e.target; 
                   if(clicked.classList.contains('num')){
                       this.viewDisplay(clicked.innerText);
                   }
                   if(clicked.classList.contains('clear')){
                    this.clearDisplay();
                }
                if(clicked.classList.contains('del')){
                    this.deleteValue();
                }
                if(clicked.classList.contains('equal')){
                    this.viewResult();
                }
               })
           },
           viewDisplay(text){
                this.display,value += text;
           },
           clearDisplay(){
               this.display.value = '';
           },
           viewResult(){
                try{
                    return this.display.value = eval(this.display.value)
                }catch(err){
                    return this.display.value = 'Valor Incorreto';
                }
           },
           deleteValue(){
               this.display.value = this.display.value.slice(0, -1);
           }
        }
        
    }
    const calculator = createCalculator();
    calculator.turnOn();



})();


