# Expense Tracker

A full-stack Expense Tracker Application built with React.js, Node.js, and MongoDB, featuring secure user authentication, data visualization, and dynamic page routing. This application helps users effectively track and visualize their expenses.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Expense Management**: Add, edit, and delete expense entries.
- **Data Visualization**: Interactive charts and graphs powered by Chart.js.
- **Dynamic Routing**: Utilizes React Router DOM for seamless navigation.
- **Responsive Design**: Fully responsive user interface for all devices.
- **Real-time Updates**: Instant updates to expense data.

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Chart.js
- CSS3/SCSS for styling

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Security
- JWT for authentication
- Password hashing using bcrypt

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB server running locally or accessible via URI

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/sauravkumar405/expense-tracker.git
    cd expense-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    cd client
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
      ```env
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      ```

4. Start the development servers:
    - Backend server:
      ```bash
      npm run server
      ```
    - Frontend React app:
      ```bash
      cd client
      npm start
      ```

5. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Sign up or log in to your account.
2. Add your income and expenses.
3. Visualize your expense data with charts.
4. Manage your expense entries as needed.

## Screenshots

- Add screenshots showcasing key features like the dashboard, expense list, and charts.

## Folder Structure

```
expense-tracker/
├── client/       # React frontend code
├── server/       # Node.js backend code
├── models/       # MongoDB schemas
├── routes/       # API endpoints
├── middleware/   # Authentication and other middleware
├── .env          # Environment variables
├── package.json  # Backend dependencies
└── README.md     # Documentation
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: [Saurabh Kumar](https://github.com/sauravkumar405)
- **LinkedIn**: [Saurabh Kumar](https://www.linkedin.com/in/saurabhkumar-xo/)
