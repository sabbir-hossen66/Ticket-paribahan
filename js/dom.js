const allSeatBtn = document.getElementsByClassName('seat-btn');
// console.log(allSeatBtn);

let count = 0;
for (const btn of allSeatBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1;

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
    const totalCost = document.getElementById('total-price').innerText;

    const convertedTotalCost = parseInt(totalCost)
    const sum = convertedTotalCost + parseInt(price)


    // GRAND TOTAL  
    const grandTotal = document.getElementById('grand-total').innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    const sumOfGrand = convertedGrandTotal + parseInt(price);


    innerText('grand-total', sumOfGrand)
    innerText('total-price', sum)
    innerText('seat-count', count)
  })
}

function innerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}