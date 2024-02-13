// Function to handle user logout
const logout = async function() {
    try {
      // Send a POST request to the server to log out the user
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Check if the logout was successful
      if (response.ok) {
        // Redirect to the home page and display a success message
        document.location.replace('/');
        alert('Logged out successfully!');
      } else {
        // Display an alert if the logout failed
        alert('Failed to log out');
      }
    } catch (err) {
      // Handle unexpected errors and log them to the console
      console.error('Error during logout:', err);
      alert('An unexpected error occurred during logout.');
    }
  };
  
  // Attach the logout function to the click event of the logout link
  document.querySelector('#logout-link').addEventListener('click', logout);
  