import React,{useState} from 'react'
import Deletes from "../Images/delete.svg";
import Edit from "../Images/edit.svg";
import Modify from './Modify';

function Card({Res}) {

  const [Delete,setDelete] = useState(false);
  const [name, setName] = useState(Res.customer_name);
  const [prodName, setProdName] = useState(Res.product);
  const [quantity, setQuantity] = useState(Res.quantity);
  const [email,setEmail] = useState(Res.customer_email);

  const edit = (obj) =>{
      setQuantity(obj.quantity);
      setProdName(obj.product);
      setEmail(obj.customer_email);
      setName(obj.customer_name);
  }

  if(Delete===false){
    return (
        <div className="py-5 text-center border shadow-lg m-5" >
        <div className="container">
            <div className="clearfix">
              <h3 className="float-left">{name}</h3>
              <h3 className="float-right">{email}</h3>
            </div>
            <div className="clearfix">
              <h3 className="float-left">{prodName}</h3>
              <h3 className="float-right">{quantity}</h3>
            </div>
            <div className="clearfix">
             <div className="float-left"><img src={Deletes} onClick={()=>setDelete(true)} height="25vh" width="25vw"/></div>
             <div className="float-right"><img src={Edit} data-toggle="modal" data-target="#ModalEdit" id="ModalEditOpen"height="25vh" width="25vw"/></div>
             <Modify edit={edit} Id={Res.id} Name={name} ProdName={prodName} Quantity={quantity} Email={email}/>
            </div>
          </div>
        
      </div>
    )
  }
  else{
    return (
      <>
      </>
    )
  }
}

export default Card
