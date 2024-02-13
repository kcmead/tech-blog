// Function to handle user signup form submission
const signupFormHandler = async function (event) {
    // Prevent the default form behavior (page refresh)
    event.preventDefault();
  
    // Get the values of the username and password input fields
    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
  
    // Log the values for debugging purposes
    console.log('Username:', username);
    console.log('Password:', password);
  
    try {
      // Send a POST request to the /api/user endpoint with the user's signup information
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Redirect to the dashboard if signup is successful
        document.location.replace('/dashboard');
      } else {
        // Display an alert if signup fails
        alert('Failed to sign up');
      }
    } catch (err) {
      // Log any unexpected errors to the console for debugging purposes
      console.error('Error during signup:', err);
      // Display a generic error message to the user
      alert('An unexpected error occurred during signup');
    }
  };
  
  // Add an event listener to the signup form to call the signupFormHandler on form submission
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  