(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// avarage rating

let avgRat = (arr) => {
  let sum = 0;
  for (let reviews of arr) {
      sum += reviews.rating;
  }
  return sum / arr.length;
} 