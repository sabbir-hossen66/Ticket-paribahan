const allSeatBtn = document.getElementsByClassName('seat-btn');
// console.log(allSeatBtn);

for (const btn of allSeatBtn) {
  btn.addEventListener('click', function () {
    console.log('mama');
  })
}