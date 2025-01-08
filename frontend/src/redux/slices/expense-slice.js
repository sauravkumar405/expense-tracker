import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/api/v1/";

export const addExpense = createAsyncThunk(
  "expense/add-expense",
  async (expense, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, expense);
      return response.data; // Return the new expense data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteExpense = createAsyncThunk(
  "expense/delete-expense",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}delete-expense/${id}`);
      return id; // Return the ID of the deleted expense
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenses = createAsyncThunk(
  "expense/get-expenses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      return response.data; // Return all expenses
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTransactionHist = createAsyncThunk(
    '/history',
    async (_, { getState }) => {
      const state = getState();// global state
      const allIncomes = state.income.incomes; 
      const allExpenses = state.expense.expenses
      return [...allExpenses, ...allIncomes]
    //   const response = await fetch(`/api/posts?userId=${userId}`);
    //   return response.json();
    }
  );

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
    totalExpenses: 0,
    totalBalance: 0,
    totalIncomes: 0, // Assuming you will manage this elsewhere
    error: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    setBalance: (state) => {
      state.totalBalance = state.totalIncomes - state.totalExpenses;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
          state.expenses = action.payload;
          state.totalExpenses = action.payload.reduce(
        (total, expense) => total + expense.amount,
        0
          );
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.status = "failed";
        //   state.error = action.payload;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.unshift(action.payload.expense); // Add new expense
        state.totalExpenses += action.payload.amount;
        state.totalBalance = state.totalIncomes - state.totalExpenses;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
        state.totalExpenses = state.expenses.reduce(
          (total, expense) => total + expense.amount,
          0
        );
        state.totalBalance = state.totalIncomes - state.totalExpenses;
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getTransactionHist.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
        state.totalExpenses = state.expenses.reduce(
          (total, expense) => total + expense.amount,
          0
        );
        state.totalBalance = state.totalIncomes - state.totalExpenses;
      });
  },
});

// Export thunks to dispatch from components
// export const { addExpense, deleteExpense, getExpenses } = expenseSlice.actions;

// Export the reducer to configure the store
export default expenseSlice.reducer;
