// Retrieve the value of the post ID from the hidden input field
const postId = document.querySelector('input[name="post-id"]').value;

// Log a testing message and the retrieved post ID
console.log("testing");
console.log(postId);

// Event handler function for submitting a new comment
const commentFormHandler = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the comment content from the textarea
  const commentContent = document.querySelector('textarea[name="comment-body"]').value;
  console.log(commentContent);

  // Check if the comment content is not empty
  if (commentContent) {
    // Make an asynchronous request to the '/api/comment' endpoint to create a new comment
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the request was successful (HTTP status code 2xx)
    if (response.ok) {
      // Reload the page to reflect the new comment
      document.location.reload();
    } else {
      // Display an alert with the error status text if the request fails
      alert(response.statusText);
    }
  };
}

// Attach the commentFormHandler function to the submit event of the new-comment-form
document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
