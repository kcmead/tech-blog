// Function to handle the form submission
const newFormHandler = async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get values from the form inputs
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;
  
    // Log the values to the console for debugging
    console.log(postTitle);
    console.log(postContent);
  
    try {
      // Send a POST request to create a new post
      await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          postTitle,
          postContent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Redirect to the dashboard after successful post creation
      // document.location.replace('/dashboard');
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error('Error creating post:', error);
    }
  };
  
  // Event listener for the form submission
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  