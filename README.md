# Expense Tracker

A modern, user-friendly web application to help you track and manage your personal expenses efficiently.

## 📌 Features

- Track daily income and expenses
- Categorize transactions
- Visual analytics and reports
- Monthly/yearly budget planning
- Export financial data
- Responsive design for mobile and desktop
- Secure user authentication

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sauravkumar405/expense-tracker.git
cd expense-tracker
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: CSS/SCSS
- **Charts**: Chart.js

## 📊 Project Structure

```
expense-tracker/
├── client/              # Frontend React application
├── server/              # Backend Node.js application
├── config/              # Configuration files
├── models/              # Database models
├── routes/              # API routes
├── middleware/          # Custom middleware
├── utils/              # Utility functions
└── tests/              # Test files
```

## 🔒 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 👏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the open-source community for their invaluable tools and libraries

## 📧 Contact

Saurav Kumar - [GitHub](https://github.com/sauravkumar405)

Project Link: [https://github.com/sauravkumar405/expense-tracker](https://github.com/sauravkumar405/expense-tracker)
