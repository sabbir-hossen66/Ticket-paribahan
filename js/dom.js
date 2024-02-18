const allSeatBtn = document.getElementsByClassName('seat-btn');
// console.log(allSeatBtn);

let count = 0;
for (const btn of allSeatBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1;
    document.getElementById("seat-count").innerText = count;
  })
}