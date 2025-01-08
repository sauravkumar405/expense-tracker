import IncomeModel from "../models/IncomeModel.js"

export const addIncome = async (req, res) => {
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

        // Create a new income entry
        const income = new IncomeModel({
            title,
            amount,
            date,
            category,
            description
        });

        // Save the income to the database
        const savedIncome = await income.save();
        
        // Send a success response
        return res.status(201).json({ message: 'Income added successfully', income: savedIncome });
    } catch (error) {
        // Handle any errors during the saving process
        console.error('Error adding income:', error);
        
        // Send an error response
        return res.status(500).json({ message: 'Server Error: Could not add income' });
    }
};

export const getIncomes = async(req, res)=>{
    try{
        const incomes = await IncomeModel.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }
    catch(error){
        res.status(500).json({message: "Server Error"})

    }
}

export const deleteIncome = async(req, res)=>{
    const {id} = req.params
    IncomeModel.findByIdAndDelete(id).then((income)=>{
        console.log(income)
        res.status(200).json({message: "Income Successfully deleted"})
    }).catch((income)=>{
        res.status(500).json({message: "Could not delete server error it seems"})

    })
}

