import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function Neworder({add}) {

    const [name, setName] = useState('');
    const [prodName, setProdName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [email,setEmail] = useState('');

    const inputHandler = (event, number) => {
        if (number === 0)
            setName(event.target.value);
        else if(number === 1)
            setProdName(event.target.value);
        else if(number === 2)
            setQuantity(event.target.value)
        else 
            setEmail(event.target.value)
    };

    const Submit = (event) =>{
        event.preventDefault();
        var id=uuidv4();
        var obj = {
            id:id,
            customer_name:name,
            customer_email:email,
            product:prodName,
            quantity:quantity,
        }
        localStorage.setItem(`${id}`, JSON.stringify(obj));
        document.getElementById("Closing").click();
        add(obj)

    }


    return (
        <>
        <div className="modal fade bd-example-modal-lg" id="ModalAdd" data-backdrop="" tabIndex="-1" role="dialog" aria-labelledby="ModalAdd" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header ModalBack text-center">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="Closing">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body py-0">
            <div className="container-fluid p-5">
            <form onSubmit={Submit}>
            <div class="form-row">
              <div class="form-group col-md-6"> <input type="text" onChange={(event)=>inputHandler(event,0)} class="form-control" id="form27" placeholder="Name"/> </div>
              <div class="form-group col-md-6"> <input type="email" onChange={(event)=>inputHandler(event,3)} class="form-control" id="form28" placeholder="Email"/> </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <input type="text" onChange={(event)=>inputHandler(event,1)} class="form-control" id="form27" placeholder="ProductName"/> </div>
              <div class="form-group col-md-6"> <input type="text" onChange={(event)=>inputHandler(event,2)} class="form-control" id="form28" placeholder="Quantity"/> </div>
            </div>
             <center><button type="submit" class="btn btn-primary">Submit</button></center>
          </form>
            </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Neworder
