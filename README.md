# To-Do List App

A feature-rich to-do list application built with ReactJS. This app provides a seamless experience for managing tasks with functionalities including task addition, editing, deletion, and completion toggling. It also supports task categorization, filtering, prioritization, and due date setting.

## 🚀 Features

- **Add Tasks**: Create new tasks with title, description, due date, and priority.
- **Edit Tasks**: Update existing tasks as needed.
- **Delete Tasks**: Remove tasks from the list.
- **Mark as Complete**: Toggle tasks between complete and incomplete statuses.
- **Filter Tasks**: View tasks based on status (all, active, completed).
- **Task Prioritization**: Set and view the priority of tasks.
- **Due Date Setting**: Assign and view due dates for tasks.

## 🛠 Technologies Used

- **ReactJS**: For building user interfaces.
- **Styled-Components**: For component-level styling.
- **JavaScript (ES6+)**: Modern JavaScript features.

## 📦 Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. **Install Dependencies**

    Ensure you have Node.js installed. Then run:

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    npm start
    ```

    Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 🌿 Branches

- **APP**: Default branch with the initial version of the app.
- **APP_Final**: Latest branch with the most recent updates and features.

## 💡 Usage

- **Adding a Task**: Fill out the form with the task details and click "Add Task."
- **Editing a Task**: Click "Edit" on the task, modify the details, and click "Update Task."
- **Deleting a Task**: Click "Delete" on the task you wish to remove.
- **Marking as Complete**: Toggle the task's completion status with "Mark as Complete."
- **Filtering Tasks**: Use the filter options to sort tasks by their status.

## 📂 File Structure

```bash
todo-app/
├── src/
│   ├── components/
│   │   └── TaskCard.js    # Component for displaying individual tasks
│   ├── App.js             # Main component managing state and logic
│   ├── TaskForm.js        # Component for task creation and editing
│   ├── TaskList.js        # Component for rendering the task list
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── public/
│   ├── index.html         # HTML template
│   └── favicon.ico        # Application icon
├── .gitignore             # Git ignore rules
├── package.json           # Project metadata and dependencies
└── README.md              # This file
```

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- **ReactJS**: For enabling powerful UI development.
- **Styled-Components**: For simplifying styling.
