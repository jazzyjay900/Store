var a ;

  a = JSON.parse(localStorage.getItem('hoodieoutput'));

  function output(a){
    let items ="";
    for(let i = 0; i<a.length; i++){
      items += `<li>${'Item: '+ a[i].hoodieName + '<br>'+ 'Price: $'+ a[i].hoodiePrice + '<br>'+'Color: '+ a[i].hoodieColor + '<br>'+'Size: '+ a[i].hoodieSize}</li>`;
    }
    return items;
  }


  function Sumtotal(a){
    let sum = 0;
    const tax = 0.15;
    let total = 0;
    let output = 0;
    for(let i = 0; i<a.length; i++){
      sum += a[i].hoodiePrice;
      total = tax*sum;
    }
    output = sum + total;
    taxamt(a);
    return output;
  }

  function taxamt(a){
    let sum = 0;
    const tax = 0.15;
    let total = 0;
    let output = 0;
    for(let i = 0; i<a.length; i++){
      sum += a[i].hoodiePrice;
      total = tax*sum;
    }
    output = sum + total;
    return total;
  }

  function checkout(){
    localStorage.removeItem('hoodieoutput');
  }

  document.getElementById('receipt').innerHTML = `
  <ol>
    ${output(a)}
  </ol>
  `;

  document.getElementById('total').innerHTML = `<p>Tax:$${taxamt(a)} | Total: $${Sumtotal(a)}</p>`