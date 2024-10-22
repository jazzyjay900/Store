


var colorOutput;
var sizeOutput;
let CartQuantity = 0;


var c;
var s;
var hoodie = [{hoodieName: "Men's tri-color hoodie",hoodiePrice: 26,hoodieColor: c,hoodieSize: s,},
                {hoodieName: "Boerboel Hoodie", hoodiePrice: 24, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "Women's comfy hoodie", hoodiePrice: 28, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "Jupiter Hoodie", hoodiePrice: 30, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "California Hoodie", hoodiePrice: 25, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "SunShine Hoodie", hoodiePrice: 28, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "Comfy baggie Hoodie", hoodiePrice: 35, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "Uni-Sex Tech Hoodie", hoodiePrice: 27, hoodieColor: c, hoodieSize: s,},
                {hoodieName: "Plain uni-sex Hoodie", hoodiePrice: 20, hoodieColor: c, hoodieSize: s,}];


document.getElementById('Hoodie1-name').innerHTML =hoodie[0].hoodieName;
document.getElementById('Hoodie1-price').innerHTML =`$ ${hoodie[0].hoodiePrice}`;

document.getElementById('Hoodie2-name').innerHTML =hoodie[1].hoodieName;
document.getElementById('Hoodie2-price').innerHTML =`$ ${hoodie[1].hoodiePrice}`;

document.getElementById('Hoodie3-name').innerHTML =hoodie[2].hoodieName;
document.getElementById('Hoodie3-price').innerHTML =`$ ${hoodie[2].hoodiePrice}`;

document.getElementById('Hoodie4-name').innerHTML =hoodie[3].hoodieName;
document.getElementById('Hoodie4-price').innerHTML =`$ ${hoodie[3].hoodiePrice}`;

document.getElementById('Hoodie5-name').innerHTML =hoodie[4].hoodieName;
document.getElementById('Hoodie5-price').innerHTML =`$ ${hoodie[4].hoodiePrice}`;

document.getElementById('Hoodie6-name').innerHTML =hoodie[5].hoodieName;
document.getElementById('Hoodie6-price').innerHTML =`$ ${hoodie[5].hoodiePrice}`;

document.getElementById('Hoodie7-name').innerHTML =hoodie[6].hoodieName;
document.getElementById('Hoodie7-price').innerHTML =`$ ${hoodie[6].hoodiePrice}`;

document.getElementById('Hoodie8-name').innerHTML =hoodie[7].hoodieName;
document.getElementById('Hoodie8-price').innerHTML =`$ ${hoodie[7].hoodiePrice}`;

document.getElementById('Hoodie9-name').innerHTML =hoodie[8].hoodieName;
document.getElementById('Hoodie9-price').innerHTML =`$ ${hoodie[8].hoodiePrice}`;



function getOption(indnum) {
  colorElement = document.querySelector('#colors');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption2(indnum) {
  colorElement = document.querySelector('#colors1');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size1');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption3(indnum) {
  colorElement = document.querySelector('#colors2');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size2');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption4(indnum) {
  colorElement = document.querySelector('#colors3');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size3');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption5(indnum) {
  colorElement = document.querySelector('#colors4');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size4');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption6(indnum) {
  colorElement = document.querySelector('#colors5');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size5');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption7(indnum) {
  colorElement = document.querySelector('#colors6');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size6');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption8(indnum) {
  colorElement = document.querySelector('#colors7');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size7');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

function getOption9(indnum) {
  colorElement = document.querySelector('#colors8');
  colorOutput = colorElement.value;
  sizeElement = document.querySelector('#size8');
  sizeOutput = sizeElement.value;
  updateCartQuantity(indnum,colorOutput,sizeOutput);
}

let bg = document.getElementById('cartinfo')
console.log(bg);

function updateCartQuantity(indnum,color,size){
    a = indnum;
    hoodie[a].hoodieColor = color;
    hoodie[a].hoodieSize = size;
//add the hoodie object to the invoice variable
    var invoice = hoodie[a];
//if localstorage is empty then save an empty array
    if(localStorage.getItem('hoodieoutput')==null){
      localStorage.setItem('hoodieoutput','[]');
    }
    var hoodieInvoice = JSON.parse(localStorage.getItem('hoodieoutput'));
    hoodieInvoice.push(invoice);

    localStorage.setItem('hoodieoutput',JSON.stringify(hoodieInvoice));
    console.log(hoodieInvoice);
    CartQuantity+=1;

    document.getElementById('cartAmount').innerHTML = CartQuantity;
    
  }

