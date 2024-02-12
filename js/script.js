let box1 = document.querySelector(".box1");
let input1 = document.querySelector(".input1");
let error1 = document.querySelector(".error1");
let btn1 = document.querySelector(".btn1");
let head1 = document.querySelector(".head1")
//==========================================================
let box2 = document.querySelector(".box2");
let input2 = document.querySelector(".input2");
let error2 = document.querySelector(".error2");
let btn2 = document.querySelector(".btn2");
let head2 = document.querySelector(".head2")
//==========================================================
let box3 = document.querySelector(".box3");
let input3 = document.querySelector(".input3");
let error3 = document.querySelector(".error3");
let btn3 = document.querySelector(".btn3");
let head3 = document.querySelector(".head3")
//==========================================================
let box4 = document.querySelector(".box4");
let input4 = document.querySelector(".input4");
let error4 = document.querySelector(".error4");
let btn4 = document.querySelector(".btn4");
let head4 = document.querySelector(".head4")
//==========================================================
let box5 = document.querySelector(".box5");
let result = document.querySelector(".result")
let chanceleft = document.querySelector(".chance")
let player = document.querySelector(".ploneinput")
let chance = 5



btn1.addEventListener("click", function () {
    if ( input1.value == "" ){
        error1.innerHTML = "Please Enter Your Name..!!";
    }else{
        error1.innerHTML = "";
        box1.style.display = "none";
        box2.style.display = "flex";
        head2.innerHTML = input1.value; 
    }
});


btn2.addEventListener("click", function () {
    if ( input2.value == "" ){
        error2.innerHTML = "Please Enter A Number Between 0 To 9..!!";
    }else if (input2.value >= 0 && input2.value <= 9) {
        error2.innerHTML = "";
        box2.style.display = "none";
        box3.style.display = "flex";
    }else{
        error2.innerHTML = "Please Enter A Number Between 0 To 9..!!";
    }
});


btn3.addEventListener("click", function () {
    if ( input3.value == "" ){
        error3.innerHTML = "Please Enter Your Name..!!";
    }else{
        error3.innerHTML = "";
        box3.style.display = "none";
        box4.style.display = "flex";
        head4.innerHTML = input3.value;
    }
});


btn4.addEventListener("click", function () {
    if ( input4.value == ""){
        error4.innerHTML = "Please Enter A Number Between 0 To 9..!!";
    }else{
        if( input2.value == input4.value ){
        error4.innerHTML = "";
        box4.style.display = "none";
        box5.style.display = "flex";
        result.innerHTML = `${input3.value} Win's`;
        player.innerHTML = `${input1.value} input was ${input2.value}`;
        }else{
            chance = chance - 1;
            chanceleft.innerHTML = `Chance Left ${chance}`;
            if( chance == 0 ){
        box4.style.display = "none";
        box5.style.display = "flex";
        result.innerHTML = `${input1.value} Win's`;
        player.innerHTML = `${input1.value} input was ${input2.value}`;
        }
        }
        }
});