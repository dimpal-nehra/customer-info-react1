import { useState, useEffect } from "react";

const AddCustomer = (props)=>{

    const [name,setName] = useState('')
    const [loc,setLoc] = useState('')

    useEffect(()=>{
        if(props.inEditState){
            console.log("in edit state")
            setName(props.cusById.customerName)
            setLoc(props.cusById.customerLocation)
        }
    },[props.inEditState])

    const onFormSubmitted = (e)=>{
        e.preventDefault()
        if(!name || !loc){
            alert("Enter the Details in the form!!")
            return
        }
        const isEdit = (props.inEditState) ? true : false; 
        const customer = (props.inEditState) ? {id : props.cusById.id,customerName:name,customerLocation :loc} : {customerName:name,customerLocation :loc};
        props.addCustomer(customer,isEdit)
        setName('')
        setLoc('')
    }

    return(
        <div>
            <form className="form-box" onSubmit={onFormSubmitted}>
                <div className="form-group">
                    <label>Customer Name : </label>
                    <input type="text" className="form-control" placeholder="Enter Name" required
                        value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Location : </label>
                    <input type="text" className="form-control" placeholder="Enter Location" required
                        value={loc} onChange={(e)=> setLoc(e.target.value)}
                    />
                </div>
                <button type="submit" className={(props.inEditState) ? "btn btn-warning" :"btn btn-primary"}>
                    {(props.inEditState) ? "Edit Customer" : "Add Customer"}
                </button>
            </form>
        </div>
    )
}

export default AddCustomer;
