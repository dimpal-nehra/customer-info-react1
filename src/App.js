import './App.css';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import { useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {

  const [customers, setCustomers] = useState([
    {
      "customerId": 101,
      "customerName": "Customer 1",
      "customerLocation": "Location 1"
    },
    {
      "customerId": 102,
      "customerName": "Customer 2",
      "customerLocation": "Location 2"
    },
    {
      "customerId": 103,
      "customerName": "Customer 3",
      "customerLocation": "Location 3"
    }
  ])

  const addCustomerOnClick = (customer)=>{
    console.log(customer)
    const id = Math.random()
    const newCustomer = {id,...customer}
    setCustomers([...customers,newCustomer])
  }

  const deleteCustomerOnClick = (id)=>{
    setCustomers(customers.filter((cust)=> cust.customerId !== id))
  }
     return ( 
      <div>
      <div className='container'>
        <div className='outer-box'>
          <Header title = "Cutomer Information"></Header>
          <AddCustomer addCustomer = {addCustomerOnClick}/>
        </div>
        { customers.length > 0 ? <Cards customers={customers} deleteCus = {deleteCustomerOnClick}></Cards> : 'No Customers There To Show!!'}
      </div>
      <Footer />
    </div>
  );
}

export default App;
