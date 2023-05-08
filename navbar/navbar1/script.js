let SearchBtn= document.querySelector('.SearchBtn');
let CloseBtn= document.querySelector('.CloseBtn');
let SearchBox= document.querySelector('.searchbar');

SearchBtn.onclick = function() {
  SearchBox.classList.add('active');
  CloseBtn.classList.add('active');
  SearchBtn.classList.add('active');
};
CloseBtn.onclick = function() {
  SearchBox.classList.remove('active');
  CloseBtn.classList.remove('active');
  SearchBtn.classList.remove('active');  
};
