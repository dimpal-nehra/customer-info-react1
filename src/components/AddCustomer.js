import { useState } from "react";

const AddCustomer = (props)=>{

    const [name,setName] = useState('')
    const [loc,setLoc] = useState('')

    const onFormSubmitted = (e)=>{
        e.preventDefault()
        if(!name || !loc){
            alert("Enter the Details in the form!!")
            return
        }
        props.addCustomer({customerName:name,customerLocation :loc})
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
                <button type="submit" className="btn btn-primary">Add Customer</button>
            </form>
        </div>
    )
}

export default AddCustomer;
