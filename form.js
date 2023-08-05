// Function to validate and submit the form
function validateAndSubmit() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  // Check if the email is in lowercase
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMessage.innerText = 'Email should be in lowercase.';
    return false; // Prevent form submission
  }
  errorMessage.innerText = ''; // Clear error message
  // The form will be automatically submitted since it passed the validation.
  return true;
}

// Add event listener below
document.getElementById('feedback-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting by default
  validateAndSubmit(); // Call the validation function
});