function insert (word) {
  let inp = document.querySelector('input');
  let start = inp.selectionStart;
  inp.value = inp.value.substring(0, start) + word +
  inp.value.substring(inp.selectionStart, inp.value.length)
};
var op;
function funck(){
	let num1 = Number(document.getElementById('value2').value);
    let num2 = Number(document.getElementById('value1').value);
    var result;
    switch(op){
    	case "+":
    	result = num1 + num2;
    	break;
    	case "-":
    	result = num1 - num2;
    	break;
    	case "*":
    	result = num1 * num2;
    	break;
    	case "/":
    	result = num1 / num2;
    	break;
    }
    
    	alert(document.getElementById('value1').value = result);

    
 

}
const send = document.querySelector('#action');
send.addEventListener('click', function(e){
value2.value = value1.value;
});
const sendTwo = document.querySelector('#plus');
sendTwo.addEventListener('click', function(e){
value2.value = value1.value;
});
const sendThree = document.querySelector('#minus');
sendThree.addEventListener('click', function(e){
value2.value = value1.value;
});
const sendFour = document.querySelector('#delenie');
sendFour.addEventListener('click', function(e){
value2.value = value1.value;
});
var buttons = document.getElementsByClassName("item");
for (var i in buttons) {
  if (buttons[i].addEventListener) {
    buttons[i].addEventListener('click', function(e){
      value1.value = "";
    });
  }
}
var clear = document.getElementsByClassName("AC");
for (var i in clear) {
  if (clear[i].addEventListener) {
    clear[i].addEventListener('click', function(e){
      value1.value = "";
      value2.value = "";
    });
  }
}
