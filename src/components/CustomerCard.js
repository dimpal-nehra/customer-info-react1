import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

const CustomerCard = (props)=>{
    return(
        <div className="card-box">
            <p className = "id">Customer { props.index + 1 }</p>
            <p className = "name">Customer Name : { props.customer.customerName }</p>
            <p className = "loc">Customer Location : { props.customer.customerLocation }</p>
            <div className='edit-delete'>
                <AiFillDelete style = {{ color:'#ff00bf', cursor:'pointer'}} 
                    onClick={()=> props.deleteCus(props.customer.customerId)} 
                />
                <FaEdit style = {{ color:'#ff00bf', cursor:'pointer'}} />
            </div>
        </div>
    )
}

export default CustomerCard;
