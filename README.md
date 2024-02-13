# Tech Blog CMS

This is a Content Management System (CMS)-style blog site that allows developers to publish articles, blog posts, and share their thoughts and opinions. The application provides user authentication, a dashboard for managing blog posts, and the ability to view, comment on, and interact with published content.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## User Story

As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

## Acceptance Criteria

1. When visiting the site for the first time, the user is presented with the homepage, which includes existing blog posts (if any).
2. The homepage has navigation links to the homepage itself and other relevant sections.
3. Clicking on any other links in the navigation prompts the user to sign up or sign in.
4. When choosing to sign up, the user is prompted to create a username and password.
5. Clicking on the sign-up button saves user credentials, and the user is logged into the site.
6. Revisiting the site later and choosing to sign in prompts the user to enter their username and password.
7. When signed in, the user sees navigation links for the homepage, the dashboard, and the option to log out.
8. Clicking on the homepage option in the navigation takes the user to the homepage with existing blog posts.
9. Clicking on an existing blog post displays the post title, contents, post creator’s username, and date created.
10. Entering a comment and clicking submit while signed in saves the comment and updates the post to display it.
11. Clicking on the dashboard option in the navigation takes the user to a dashboard with existing blog posts.
12. Clicking on the button to add a new blog post prompts the user to enter a title and contents for the post.
13. Clicking on the button to create a new blog post saves the title and contents, updating the dashboard.
14. Clicking on one of the existing posts in the dashboard allows the user to delete or update the post.
15. Clicking on the logout option in the navigation signs the user out of the site.
16. If idle on the site for more than a set time, the user can still view posts and comments but is prompted to log in again before adding, updating, or deleting content.

## Features

- User authentication (sign up, sign in, log out)
- Dashboard for managing blog posts
- View and comment on published blog posts
- Create, update, and delete personal blog posts

## Usage

1. Visit the [Tech Blog CMS](#) deployed site.
2. Sign up or sign in to access the dashboard and create/update/delete blog posts.

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Configure your database connection in the `.env` file.
5. Run the application using `npm start` or `node server.js`.

## Screenshots

**Dashboard**
  - ![dashboard](/public/images/dashboard.png)

**Sign Up**
  - ![signUp](/public/images/sign%20up.png)

**Log In**
  - ![login](/public/images/log%20in.png)

**Edit Post**
  - ![editPost](/public/images/edit%20post.png)

**Alert Message**
  - ![alertMessage](/public/images/alert%20message.png)

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Handlebars.js
- HTML, CSS, JavaScript

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
