To-Do List Application
Overview
This is a feature-rich to-do list application built with ReactJS. The app allows users to manage tasks effectively by providing functionality for adding, editing, deleting, and marking tasks as complete. It also includes features for categorizing tasks, filtering views, and setting task priorities and due dates.

Features
Add Tasks: Users can add new tasks with a title, description, due date, and priority.
Edit Tasks: Users can modify existing tasks.
Delete Tasks: Users can remove tasks from the list.
Mark as Complete: Users can toggle tasks between complete and incomplete.
Filter Tasks: Users can view all tasks, only active tasks, or completed tasks.
Task Prioritization: Users can set and view the priority of tasks.
Due Date Setting: Users can set and view due dates for tasks.
Technologies Used
ReactJS: JavaScript library for building user interfaces.
Styled-Components: For CSS-in-JS styling.
JavaScript (ES6+): Modern JavaScript features.
Installation
Clone the Repository

bash
Copier le code
git clone https://github.com/your-username/todo-app.git
cd todo-app
Install Dependencies

Ensure you have Node.js installed, then run:

bash
Copier le code
npm install
Start the Development Server

bash
Copier le code
npm start
Open http://localhost:3000 in your browser to view the application.

Branches
APP: Default branch, contains the initial version of the app.
APP_Final: Latest version of the app, with all the latest updates and features.
Usage
Adding a Task

Fill in the title, description, due date, and priority.
Click "Add Task" to add it to the list.
Editing a Task

Click "Edit" on the task you want to modify.
Update the details and click "Update Task" to save changes.
Deleting a Task

Click "Delete" on the task you want to remove.
Marking as Complete

Click "Mark as Complete" to toggle the task's completion status.
Filtering Tasks

Use the filter options to view tasks based on their status (all, active, completed).
File Structure
php
Copier le code
todo-app/
├── src/
│   ├── components/
│   │   ├── TaskCard.js    # Component for displaying individual tasks
│   ├── App.js             # Main component, holds state and logic
│   ├── TaskForm.js        # Component for adding and editing tasks
│   ├── TaskList.js        # Component for displaying the list of tasks
│   ├── index.js           # Entry point for React
│   └── index.css          # Global styles
├── public/
│   ├── index.html         # HTML template
│   └── favicon.ico        # Application icon
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and dependencies
└── README.md              # This file
Contributing
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
ReactJS: For the powerful UI building capabilities.
Styled-Components: For simplifying component styling.
