import ExpenseModel from "../models/ExpenseModel.js"

export const addExpense = async (req, res) => {
    const { title, amount, date, category, description } = req.body;

    try {
        // Validation conditions
        if (!title || typeof title !== 'string') {
            return res.status(400).json({ message: 'Title is required and must be a string' });
        }

        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Amount is required and must be a positive number' });
        }

        if (!date || isNaN(new Date(date).getTime())) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        if (!category || typeof category !== 'string') {
            return res.status(400).json({ message: 'Category is required and must be a string' });
        }

        if (!description || typeof description !== 'string') {
            return res.status(400).json({ message: 'Description is required and must be a string' });
        }

        // Create a new expense entry
        const expense = new ExpenseModel({
            title,
            amount,
            date,
            category,
            description
        });

        // Save the Expense to the database
        const savedExpense = await expense.save();
        
        // Send a success response
        return res.status(201).json({ message: 'Expense added successfully', expense: savedExpense });
    } catch (error) {
        // Handle any errors during the saving process
        console.error('Error adding Expense:', error);
        
        // Send an error response
        return res.status(500).json({ message: 'Server Error: Could not add Expense' });
    }
};

export const getExpenses = async(req, res)=>{
    try{
        const expenses = await ExpenseModel.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(500).json({message: "Server Error"})

    }
}

export const deleteExpense = async(req, res)=>{
    const {id} = req.params
    ExpenseModel.findByIdAndDelete(id).then((expense)=>{
        return res.status(200).json({message: "Expense Successfully deleted", id})
    }).catch((Expense)=>{
        res.status(500).json({message: "Could not delete server error it seems"})

    })
}

