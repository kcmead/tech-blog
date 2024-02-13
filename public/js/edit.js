// Get the post ID from the hidden input field in the form
const postId = document.querySelector('input[name="post-id"]').value;

// Log a test message and the retrieved post ID to the console
console.log("Testing");
console.log(postId);

// Event handler for the edit form submission
const editFormHandler = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the post title and content from the form input fields
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  // Log the retrieved post title and content to the console
  console.log(postTitle);
  console.log(postContent);

  // Send a PUT request to update the post data
  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Log the response to the console
  console.log(response);

  // If the update is successful, redirect to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    // If the update fails, display an alert
    alert('Failed to update your post');
  }

  // Redirect to the dashboard (this line is unreachable due to previous redirect)
  document.location.replace('/dashboard');
};

// Event handler for the delete button click
const deleteClickHandler = async () => {
  // Send a DELETE request to delete the post
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  // Redirect to the dashboard after the post is deleted
  document.location.replace('/dashboard');
};

// Add event listeners to the edit form submission and delete button click
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
