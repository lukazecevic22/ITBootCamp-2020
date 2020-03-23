import axios from 'axios'

export const dajRadnike = async () =>{
    return await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => response.data.data)
    }

export const noviRadnik = async (name,salary) => {
        return await axios.post(`http://dummy.restapiexample.com/api/v1/create`, {name:name,salary:salary})
    }