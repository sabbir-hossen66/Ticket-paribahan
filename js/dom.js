const allSeatBtn = document.getElementsByClassName('seat-btn');
// console.log(allSeatBtn);



let count = 0;
for (const btn of allSeatBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1;

    const seatLeft = document.getElementById('seat-left');
    const seatLeftInnerText = seatLeft.innerText;
    const seatLeftParse = parseInt(seatLeftInnerText);
    seatLeft.innerText = seatLeftParse - 1;



    // show the sitname on the screen
    const sitName = e.target.innerText;
    const price = 550;
    const showSitName = document.getElementById('show-sit-name');
    const li = document.createElement('li');

    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.innerText = sitName;
    p2.innerText = price;

    li.appendChild(p);
    showSitName.appendChild(p);
    showSitName.appendChild(p2);

    // total cost shows
    // const totalCost = document.getElementById('total-price').innerText;

    // const convertedTotalCost = parseInt(totalCost)
    // const sum = convertedTotalCost + parseInt(price)


    // GRAND TOTAL
    // const grandTotal = document.getElementById('grand-total').innerText;
    // const convertedGrandTotal = parseInt(grandTotal);
    // const sumOfGrand = convertedGrandTotal + parseInt(price);
    // console.log(sumOfGrand);

    //-------------------------------->------------------------------------->
    // innerText('grand-total', sumOfGrand)
    // innerText('total-price', sum)

    totalCost('total-price', parseInt(price))
    grandTotal('grand-total', parseInt(price))

    innerText('seat-count', count)
  })
}

// TOTAL PRICE
function totalCost(elementId, value) {
  const totalCost = document.getElementById(elementId).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value)
  innerText('total-price', sum)
}
// GRAND TOTAL PRICE
function grandTotal(elementId, value) {
  const grandTotal = document.getElementById(elementId).innerText;
  const convertedGrandTotal = parseInt(grandTotal);
  const sumOfGrand = convertedGrandTotal + parseInt(value);
  innerText('grand-total', sumOfGrand)
}


function innerText(elementId, value) {
  document.getElementById(elementId).innerText = value;

}