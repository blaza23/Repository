console.log('Exercise 02');



document.querySelectorAll('button').forEach(button => {
    let counter = 0;

  button.addEventListener('click', function() {
      ++ counter;
      button.dataset.clickCount = counter;

      console.log("button: " + button.dataset.id + " clicks: " +button.dataset.clickCount)

  
  });
});
