(function() {
  const dataLayer = window.dataLayer || [];
  const textarea = document.querySelector('.textarea');
  const button = document.querySelector('.button');
  
  const handleOnClick = () => {
    const { 
      value: textareaValue
    } = textarea;
    
    dataLayer.push(textareaValue);
    console.log('Pushed: ', textareaValue);
  }
  
  button.addEventListener('click', handleOnClick);
})()
