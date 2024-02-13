// Handler function for the login form submission
const loginFormHandler = async function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the username and password input elements
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
  
    // Send a POST request to the login API endpoint with user credentials
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    // Check if the login was successful (HTTP status 200-299)
    if (response.ok) {
      // Redirect to the dashboard page upon successful login
      document.location.replace('/dashboard');
    } else {
      // Display an alert if login fails
      alert('Failed to login');
    }
  };
  
  // Add an event listener to the login form for form submission
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  