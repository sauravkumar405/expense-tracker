import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/api/v1/";

export const addIncome = createAsyncThunk(
  "income/add-income",
  async (income, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      return response.data; // Return the new expense data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteIncome = createAsyncThunk(
  "income/delete-income",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}delete-income/${id}`);
      return id; // Return the ID of the deleted expense
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncomes = createAsyncThunk(
  "income/get-incomes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      return response.data; // Return all expenses
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    incomes: [],
    totalIncomes: 0,
    totalBalance: 0,
    error: null,
    status: "idle"
  },
  reducers: {
    setBalance: (state) => {
      state.totalBalance = state.totalIncomes - state.totalIncomes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIncomes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getIncomes.fulfilled, (state, action) => {
        state.status = "succeeded";
          state.incomes = action.payload;
          state.totalIncomes = action.payload.reduce(
        (total, income) => total + income.amount,0);
      })
      .addCase(getIncomes.rejected, (state, action) => {
        state.status = "failed";
        //   state.error = action.payload;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.incomes.unshift(action.payload.income);
        debugger;
        state.totalIncomes += action.payload.income.amount;
        state.totalBalance = state.totalExpenses - state.totalIncomes;
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteIncome.fulfilled, (state, action) => {
        state.incomes = state.incomes.filter(
          (income) => income.id !== action.payload
        );
        state.totalIncomes = state.incomes.reduce(
          (total, income) => total + income.amount,
          0
        );
        state.totalBalance = state.totalExpenses - state.totalIncomes;
      })
      .addCase(deleteIncome.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Export thunks to dispatch from components
// export const { addIncome, deleteIncome, getIncomes } = incomeSlice.actions;

// Export the reducer to configure the store
export default incomeSlice.reducer;
