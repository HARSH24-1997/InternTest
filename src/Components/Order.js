import React, { useState } from 'react'
import Data from "../Data/DummyData.json";
import Card from "../Components/Card";
import Plus from "../Images/plus.svg";
import Neworder from "../Components/Neworder";

function Order() {
    const [Count, setCount] = useState(10);
    const [Start, setStart] = useState(5);
    const [Arr, setArr] = useState(Data.slice(0,5));
    
    const nextData = ()=>{
        if(Data.length!=Arr.length){
        var temp = Data.slice(Start,Count);
        setArr(Arr.concat(temp));
        setStart(Count);
        setCount(Count+5);
        }
    }


    const addDataAtFront = (obj) =>{
        var temp = [];
        temp.push(obj);
        setArr(temp.concat(Arr));
    }

    return (
        <>
            {
                Arr.map((props,index)=>(
                    <div className="my-5"><Card Res={props}/></div>
                ))
            }
            <div className="mb-5"><center><button type="submit" class="btn btn-primary  btn-lg" onClick={()=>nextData()}>nextData</button></center></div>
            <img src={Plus} data-toggle="modal" data-target="#ModalAdd" id="ModalAddOpen" height="35vh" width="35vw" style={{position:"fixed",zIndex:"100",bottom:"30px",right:"40px"}}/>
            <Neworder add = {addDataAtFront} />
        </>
    )
}

export default Order
