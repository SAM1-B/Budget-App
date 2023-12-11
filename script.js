let errorAlert= document.querySelector(".errorAlert");
let errorAlertTwo= document.querySelector(".errorAlertTwo");



// SET BUDGET BUTTON
function set(){
    if (inputBudgetValue.value=="" || inputBudgetValue.value<=0 ) {

        // errorAlert.classList.remove("hide");
        // error.innerHTML= " Set an Amount for the Budget"; 
        
       
       
    }
    else if (inputBudgetValue.value!="" && inputBudgetValue.value!=0 ) {

        errorAlert.classList.remove("hide");
        
        
        document.getElementById("tBudgetAmount").innerHTML="#"+ inputBudgetValue.value;
        document.getElementById("tBudgetAmount").style.fontSize="30px";
        document.getElementById("tBudgetAmount").style.fontWeight="bold";
        errorAlert.classList.toggle("hide");
        // inputBudgetValue.value= "";
        document.getElementById("tExpenses").innerHTML="";
        document.getElementById("tBalance").innerHTML="";
       
    }else{

    }

    
}







// CHECK IN BUTTON
function check() {

  
 if (firstItem.value!="" ||secondItem.value!="" || 
 thirdItem.value!=""||fourthItem.value!="" ||fifthItem.value!="") {
    var first = document.getElementById("firstItem");
    var second = document.getElementById("secondItem");
    var third = document.getElementById("thirdItem");
    var fourth = document.getElementById("fourthItem");
    var fifth = document.getElementById("fifthItem");
    var sum=(Number(first.value)+Number(second.value)+Number(third.value)+Number(fourth.value)+Number(fifth.value));
    document.getElementById("tExpenses").innerHTML="#"+ sum

    document.getElementById("tExpenses").style.fontSize="30px";
    document.getElementById("tExpenses").style.fontWeight="bold";
   

    // BALANCE CALCULATION
    document.getElementById("tBalance").innerHTML=(Number(inputBudgetValue.value))-sum;
    document.getElementById("tBalance").style.fontSize="30px";
    document.getElementById("tBalance").style.fontWeight="bold";


   //TO NULLIFY THE INPUT FIELDS AFTER THE VALUES ARE ACCEPTED
    document.getElementById("firstItem").value="";
    document.getElementById("secondItem").value="";
    document.getElementById("thirdItem").value="";
    document.getElementById("fourthItem").value="";
    document.getElementById("fifthItem").value="";

    if (sum > (Number(inputBudgetValue.value))) {
        error.innerHTML= " THIS IS BEYOND YOUR BUDGET"
        errorAlert.classList.remove("hide");
        
        document.getElementById("tExpenses").innerHTML="";
        document.getElementById("tBalance").innerHTML="";
    }
    else{
        errorAlert.classList.remove("hide");
    }
 } 
 else if(firstItem.value=="" && secondItem.value=="" && thirdItem.value=="" 
          && fourthItem.value=="" && fifthItem.value==""){

      errorAlertTwo.classList.toggle("hide");
      errorTwo.innerHTML= "Kindly fill some spaces"
      document.getElementById("tExpenses").innerHTML="";
      document.getElementById("tBalance").innerHTML="";


        
        
 }
 else{
    console.log("E don doooooo");
 }
}









































