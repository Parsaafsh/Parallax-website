document.getElementById('next').onclick = function () {
  let liste = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(liste[0]);
};
document.getElementById('prev').onclick = function () {
  let liste = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(liste[liste.length - 1]);
};
