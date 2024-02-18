const allSeatBtn = document.getElementsByClassName('seat-btn');
// console.log(allSeatBtn);

let count = 0;
for (const btn of allSeatBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1;

    // show the sitname on the screen
    const sitName = e.target.innerText;
    const showSitName = document.getElementById('show-sit-name');
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerText = sitName;
    li.appendChild(p);
    showSitName.appendChild(p);

    // total cost shows
    const price = 550;
    const totalCost = document.getElementById('total-price').innerText;

    const convertedTotalCost = parseInt(totalCost);
    document.getElementById('total-price').innerText =
      convertedTotalCost + parseInt(price)


    innerText('seat-count', count)
  })
}

function innerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}