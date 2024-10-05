import React, { useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:3002/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [totalIncomes, setTotalIncomes] = useState(0)

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income)
        } catch (error) {
            setError(error)
        }
    }
    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`)
            setIncomes(() => response.data)
            return response.data
        }
        catch (error) {
            setError(error)
        }
    }
    const deleteIncome = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
            console.log('Deleted:', response.data);
        } catch (error) {
            setError(error)
        }
    }
    const totalIncome = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`)
            const result = response.data.reduce((total, { amount }) => total + amount, 0);
            setTotalIncomes(()=>result)
        }
        catch (error) {
            setError(error)
        }
    }

    return (
        <GlobalContext.Provider value={{ incomes, addIncome, deleteIncome, getIncomes, totalIncomes }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}