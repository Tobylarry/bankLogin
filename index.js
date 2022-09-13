let formm = document.querySelector('.form');
let message = document.querySelector('.msg');
let fname = document.querySelector("#fname");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let cardNum = document.querySelector("#cnum");
let para = document.querySelector(".p");
let para1 = document.querySelector(".p1");
let para2 = document.querySelector(".p2");
let para3 = document.querySelector(".p3");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc = document.querySelector(".cvc");
let regEx = /[a-z]/i;


btn.addEventListener("click", function () {
  console.log(fname.value);
});

cardNum.addEventListener("keypress", checkCardNum);

function checkCardNum(e) {
  if (e.key.match(regEx)) {
    para.style.display = "block";
    para.style.color = "red";
    para.style.fontSize = "10px";
    para.style.marginTop = "-14px";
    cardNum.style.border = '1px solid red';
  } else {
    para.style.display = "none";
    cardNum.style.border = '1px solid purple';
  }
}

btn.addEventListener("click", proceed);
btn2.addEventListener('click', function(){location.reload()})

function proceed() {
    if(month.value){
        if(month.value.length == 1 && !month.value.match(regEx)){
              para1.innerHTML = 'Two digits required!!!'
              para1.style.display = "block";
              month.style.border = '1px solid red';
        }
        else if(month.value.length == 2 && month.value.match(regEx) || month.value.length == 1 && month.value.match(regEx)){
          para1.innerHTML = 'Digits only!!!'
          para1.style.display = "block";
          month.style.border = '1px solid red';
        }else{
          para1.style.display = 'none';
        }
        para1.style.color = 'red';
        para1.style.fontSize = '10px';
        para1.style.marginTop = '-15px';
        month.style.border = '1px solid red';
      }
      else{
          para1.innerHTML = 'Cant be blank!!!';
          para1.style.display = "block";
         para1.style.color = 'red';
         para1.style.fontSize = '10px';
         para1.style.marginTop = '-15px';
         month.style.border = '1px solid red';
      }
      
      
      if(year.value){
          if(year.value.length == 1 && !year.value.match(regEx)){
                para2.innerHTML = 'Two digits required!!!'
                para2.style.display = "block";
                year.style.border = '1px solid red';
          }
          else if(year.value.length >= 0 && year.value.length <= 2 && year.value.match(regEx)){
            para2.innerHTML = 'Digits only!!!'
            para2.style.display = "block";
            year.style.border = '1px solid red';
          }else{
            para2.style.display = 'none';
          }
          para2.style.color = 'red';
          para2.style.fontSize = '10px';
          para2.style.marginTop = '-15px';
          year.style.border = '1px solid red';
        }
        else{
            para2.innerHTML = 'Cant be blank!!!';
            para2.style.display = "block";
           para2.style.color = 'red';
           para2.style.fontSize = '10px';
           para2.style.marginTop = '-15px';
           year.style.border = '1px solid red';
        }
      
        if(cvc.value){
          if(cvc.value.length >= 0 && cvc.value.length < 3 && !cvc.value.match(regEx)){
                para3.innerHTML = 'Three digits required!!!'
                para3.style.display = "block";
                cvc.style.border = '1px solid red';
          }
          else if(cvc.value.length >=0 && cvc.value.length <= 3 && cvc.value.match(regEx)){
            para3.innerHTML = 'Digits only!!!'
            para3.style.display = "block";
            cvc.style.border = '1px solid red';
          }else{
            para3.style.display = 'none';
          }
          para3.style.color = 'red';
          para3.style.fontSize = '10px';
          para3.style.marginTop = '-15px';
          cvc.style.border = '1px solid red';
        }
        else{
            para3.innerHTML = 'Cant be blank!!!';
            para3.style.display = "block";
           para3.style.color = 'red';
           para3.style.fontSize = '10px';
           para3.style.marginTop = '-15px';
           cvc.style.border = '1px solid red';
        }

        if(para1.style.display === 'none' && para2.style.display === 'none' && para3.style.display === 'none'){
            formm.style.display = 'none';
            message.style.display = 'block';
        }
}
