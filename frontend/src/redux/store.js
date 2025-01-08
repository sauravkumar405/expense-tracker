import { configureStore }  from'@reduxjs/toolkit'
import expenseReducer from './slices/expense-slice'
import incomeReducer from './slices/income-slice'

const store = configureStore({
    reducer: {
        income: incomeReducer,
        expense: expenseReducer
    }
})

export default store