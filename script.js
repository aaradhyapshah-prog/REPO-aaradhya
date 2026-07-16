
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('button[type="submit"]');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
    alert('Thank you for taking part in survey');
      });
  }
});
