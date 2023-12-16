The "React Local Storage" project is a web application developed using React JS, focusing on user authentication and role-based routing. The project consists of three main pages: Home, User, and Admin, with the implementation of protected routes to ensure secure access to specific pages based on user roles.

Home Page:
The Home page serves as the entry point for the application.
Users are prompted to enter their email address.
Upon submission, the application checks for the existence of the email in the local storage and retrieves the corresponding user role.

Role Assignment:
Two roles are defined in the system: User and Admin.
When a user enters their email on the Home page, their role is checked against the stored data in the local storage.
If the email is associated with the User role, the application redirects the user to the User page.
If the email is associated with the Admin role, the application redirects the user to the Admin page.

404 Page:
In cases where the entered email does not exist in the local storage, the application gracefully redirects the user to a 404 page.
This page communicates that the entered email is not registered in the system.

Protected Routes:
To enhance security, the application employs protected routes.
Users attempting to access the User or Admin page directly without the proper authentication will be redirected to the Home page.
This prevents unauthorized access to sensitive areas of the application.

Local Storage:
User data, including email and role, is stored in the local storage.
This allows for persistent data across page refreshes and browser sessions.
Local storage serves as a lightweight client-side database for user information.

React Router:
React Router is utilized for efficient navigation and routing between different pages.
The routing logic is implemented to handle redirection based on user roles and protect certain routes.
In summary, the "React Local Storage" project is designed to provide a seamless and secure user experience by implementing role-based routing, local storage for persistent data, and protected routes to control access to specific pages. This project can serve as a foundation for more complex applications that require user authentication and authorization.
