(function() {
  const dataLayer = window.dataLayer || [];
  const textarea = document.querySelector('.textarea');
  const button = document.querySelector('.button');
  
  const handleOnClick = () => {
    const { 
      value: textareaValue
    } = textarea;
    
    try {
      dataLayer.push(JSON.parse(textareaValue));
      console.log('Pushed: ', JSON.parse(textareaValue));
    } catch (error) {
      console.error(error);
    } 
  }
  
  button.addEventListener('click', handleOnClick);
})()
