(function() {
  const textarea = document.querySelector('.textarea');
  const button = document.querySelector('.button');
  
  function handleOnClick() {
    console.log('click');
  }
  
  button.addEventListener('click', handleOnClick);
})()
