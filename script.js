
let buttons = document.querySelectorAll(".box") ;

let fstPlayer = true;
let scndPlayer = false ;

let cnt  = 0 ;

let winnerPattern = [[0,1,2],[0,3,6],
                    [0,4,8],[1,4,7],
                    [2,5,8],[2,4,6],
                    [3,4,5],[6,7,8]] ;


buttons.forEach(button => {

    button.addEventListener("click",function()
    {
        if( fstPlayer == true)
        {
            button.innerText = "O" ;
            fstPlayer = false ;
            button.style.backgroundColor = "yellow" ;
        }
        else
        {
            button.innerText = "X" ;
            fstPlayer = true ;
            button.style.backgroundColor = "green" ;
        }
        button.disabled = true;
        button.style.color = "black" ;
        cnt++ ;

         checkWinner();
         if( cnt == 9)
         {
            matchDraw() ;
         }
        

       

    });
    
    
});

function checkWinner()
{
    for( let pattern of winnerPattern)
    {
        let val1 = buttons[pattern[0]].innerText ;
        let val2 = buttons[pattern[1]].innerText ;
        let val3 = buttons[pattern[2]].innerText ;

        if( val1 != "" && val2 != "" && val3 != "")
        {
            if( val1 === val2 && val2 === val3)
            {
                finalWinner(val1) ;
            }

        }
    }
}
 const finalWinner = (val1)=>
 {

    let h1 = document.querySelector("h1") ;
    h1.innerText = "Cogratulations winner is "+val1 ;
    h1.classList.remove("hide") ;


    let heading =  document.querySelector("hide") ; 

    
    disableBoxes() ;
    
 }


 const disableBoxes = () => {
    for (let box of buttons) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of buttons) 
    {
        fstPlayer = true;
        scndPlayer = false ;
      box.disabled = false;
      box.innerText = "" ;
      box.style.backgroundColor="white" ;
    }
  };



  let restart = document.querySelector(".btn") ;

  restart.addEventListener("click",()=>
  {
    enableBoxes() ;
    let h2 = document.querySelector("h1") ;
    h2.classList.add("hide") ;
    
  });




  let reset = document.querySelector(".reset") ;

  reset.addEventListener("click",()=>
  {
    enableBoxes() ;
    let h2 = document.querySelector("h1") ;
    h2.classList.add("hide") ;
    
  });


  const matchDraw   = () =>
  {

    let h1 = document.querySelector("h1") ;
    h1.innerText = " It is a Draw"  ;
    h1.classList.remove("hide") ;
  }