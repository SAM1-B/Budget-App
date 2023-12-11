let errorAlert= document.querySelector(".errorAlert");

function set(){
    if (inputBudgetValue.value!="") {
        document.getElementById("tBudgetAmount").innerHTML="#"+ inputBudgetValue.value;
        document.getElementById("tBudgetAmount").style.fontSize="30px";
        document.getElementById("tBudgetAmount").style.fontWeight="bold";
        errorAlert.classList.toggle("hide");
    }
    else{
        errorAlert.classList.toggle("hide");
        error.innerHTML= " Set an Amount for the Budget"
        
        
    }
}



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
   
    document.getElementById("tBalance").innerHTML=(Number(inputBudgetValue.value))-sum;
    document.getElementById("tBalance").style.fontSize="30px";
    document.getElementById("tBalance").style.fontWeight="bold";

    if (sum > (Number(inputBudgetValue.value))) {

        errorAlert.classList.toggle("hide");
        error.innerHTML= " THIS IS BEYOND YOUR BUDGET"
        document.getElementById("tExpenses").innerHTML="";
        document.getElementById("tBalance").innerHTML="";
    }
 } 
 else if(firstItem.value=="" && secondItem.value=="" && thirdItem.value=="" 
          && fourthItem.value=="" && fifthItem.value==""){

      errorAlert.classList.toggle("hide");
      error.innerHTML= "Kindly fill some spaces"
      document.getElementById("tExpenses").innerHTML="";
      document.getElementById("tBalance").innerHTML="";
 }
 else{
    console.log("E don doooooo")
 }
}







































