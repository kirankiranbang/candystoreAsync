function buycar(cb1,cb2){
    setTimeout(()=> {
         console.log('buy a car')
           cb1(cb2);
    }, 100);
  
  }
  
  
  
  function planatrip (cb1){
    setTimeout(()=> {
         console.log('lets go to manali')
           cb1();
    }, 2000);
  
  }
  
  function reachamanali (){
    setTimeout(()=> {
         console.log('reached a manali')
        
    }, 1000);
  
  }
  
  buycar(planatrip,reachamanali)



//-------------------------------------------///

//Output:

//buy a car
//lets go to manali
//reached a manali
//--------------------------------------------






//type2  incresing function/


function buycar(cb1,cb2,cb3){
    setTimeout(()=> {
         console.log('buy a car')
           cb1(cb2,cb3);
    }, 100);
  
  }
  
  
  
  function planatrip (cb1,cb2){
    setTimeout(()=> {
         console.log('lets go to manali')
           cb1(cb2);
    }, 2000);
  
  }
  
  function reachamanali (cb){
    setTimeout(()=> {
         console.log('reached a manali')
           cb();
    }, 1000);
  
  }
  
  
  
  
  function gotomountain (){
    setTimeout(()=> {
         console.log('gotomountain ')
           
    }, 1000);
  
  }
  
  buycar(planatrip,reachamanali,gotomountain)

  //buycar(planatrip(reachamanali(gotomountain)))
  //-----------------------------------------------------------


// --------------------------------------------

Output:

//buy a car
//lets go to manali
//reached a manali
//gotomountain 
// --------------------------------------------//







//type3 if u understand

function buycar(){
    setTimeout(()=> {
         console.log('buy a car')
           
    }, 100);
  
  }
  
  
  
  function planatrip (){
    setTimeout(()=> {
         console.log('lets go to manali')
          
    }, 1000);
  
  }
  
  function reachamanali (cblastbeforegotomountain){
    setTimeout(()=> {
         console.log('reached a manali')
           cblastbeforegotomountain();
    }, 2000);
  
  }
  
  
  
  
  function gotomountain (){
    setTimeout(()=> {
         console.log('gotomountain ')
           
    }, 1000);
  
  }
  
  buycar(planatrip(reachamanali(gotomountain)))
 // /--------------------------------------------//

  //Output:

  //buy a car
  //lets go to manali
  //reached a manali
  //gotomountain 
 // --------------------------------------------///

