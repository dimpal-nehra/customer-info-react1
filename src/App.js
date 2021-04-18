import './App.css';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {

  const JSON_SERVER_URL = "http://localhost:3005/customers/";
  const [customers, setCustomers] = useState([]);

  const [inEdit,setEdit] = useState(false)
  const [cusById,setCusById] = useState(null);

  const fetchCustomers = async()=>{
    const res = await fetch(JSON_SERVER_URL)
    const data = await res.json()
    return data
  }

  const fetchCustomerById = async(id)=>{
    const res = await fetch(JSON_SERVER_URL+id)
    const data = res.json()
    return data;
  }

  useEffect(()=>{
    const getCustomers = async()=>{
      const data = await fetchCustomers()
      setCustomers(data)
    }
  
    getCustomers()
  })

  const addCustomerOnClick = async(customer,isEdit)=>{
    if(!isEdit){
      // const id = Math.random()
      // const newCustomer = {id,...customer}
      // setCustomers([...customers,newCustomer])
      const res = await fetch(JSON_SERVER_URL,{
        method:'POST',
        headers:{
          "Content-type":'application/json'
        },
        body:JSON.stringify(customer)
      })
      const data = await res.json()
      setCustomers([...customers,data])
    }else{
      // const custArray = []
      // customers.forEach((item)=>{
      //   if(item.id === customer.id){
      //       let editedCusObj = {
      //         id : customer.id,
      //         customerName : customer.customerName,
      //         customerLocation : customer.customerLocation
      //       }
      //       custArray.push(editedCusObj)
      //   }else{
      //     custArray.push(item)
      //   }
      // })
      // setCustomers(custArray)
      // setEdit(false)
      const editedCusObj = {
        id:customer.id,
        customerName:customer.customerName,
        customerLocation:customer.customerLocation
      }
      const res = await fetch(JSON_SERVER_URL+customer.id,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(editedCusObj)
      })

      const data = await res.json()
      setCustomers([...customers,data])
      setEdit(false)
    }
  }

  const deleteCustomerOnClick = async(id)=>{
    const res = await fetch(JSON_SERVER_URL+id,{
      method:'DELETE'
    })
    const data = await res.json()
    setCustomers([...customers,data])
    //setCustomers(customers.filter((cust)=> cust.id !== id))
  }

  const getCustomerById = (id)=>{
    let returnCusObj;
    customers.forEach((item)=>{
      if(item.id === id){
        returnCusObj = item;
      }
    })
    return returnCusObj;
  }

  const editButtonClicked = (id)=>{
    setEdit(true)
    // ask dought on inEdit value getting false even after setting it to true
    console.log(inEdit)
    setCusById(getCustomerById(id));
    // const data = await fetchCustomerById(id)
    // setCusById(data)
    console.log(cusById)
  }
     return ( 
      <div>
      <div className='container'>
        <div className='outer-box'>
          <Header title = "Cutomer Information"></Header>
          <AddCustomer 
            addCustomer = {addCustomerOnClick} 
            inEditState = {inEdit}
            cusById = {cusById}
          />
        </div>
        { customers.length > 0 
          ? <Cards 
            customers={customers} 
            deleteCus = {deleteCustomerOnClick} 
            editButtonClicked = {editButtonClicked} 
          /> 
          : 'No Customers There To Show!!'
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
