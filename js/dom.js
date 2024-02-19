const arr = ['A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'C2',
  'D1',
  'D2',
  'E1',
  'E2',
  'F1',
  'F2',
  'G1',
  'G2',
  'H1',
  'H2',
  'I1',
  'I2',
  'J1',
  'J2',
  'A3',
  'A4',
  'B3',
  'B4',
  'C3',
  'C4',
  'D3',
  'D4',
  'E3',
  'E4',
  'F3',
  'F4',
  'G3',
  'G4',
  'H3',
  'H4',
  'I3',
  'I4',
  'J3',
  'J4',
];
for (const seat of arr) {
  const selectSeat = document.getElementById(seat);

  selectSeat.addEventListener('click', function (e) {
    selectSeat.classList.add('bg-green-400')
  })
}
const allSeatBtn = document.getElementsByClassName('seat-btn');


let count = 0;
for (const btn of allSeatBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1;

    const seatLeft = document.getElementById('seat-left');
    const seatLeftInnerText = seatLeft.innerText;
    const seatLeftParse = parseInt(seatLeftInnerText);
    seatLeft.innerText = seatLeftParse - 1;

    // cupon validation
    if (seatLeftParse < 38) {
      const applyBtn = document.getElementById('apply-btn');
      applyBtn.removeAttribute('disabled');
    }
    // validation for seat number


    if (seatLeftParse < 37) {
      alert('you can not select more than 4 seat')
      return;
    }

    // set background color

    // show the sitname on the screen
    const sitName = e.target.innerText;
    const price = 550;
    const showSitName = document.getElementById('show-sit-name');
    const div = document.createElement('div');
    const li = document.createElement('li');

    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.innerText = sitName;
    p2.innerText = price;
    div.classList.add('flex', 'justify-between')

    li.appendChild(p);
    div.appendChild(li)
    showSitName.appendChild(p);
    showSitName.appendChild(p2);

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