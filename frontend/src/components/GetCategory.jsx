import React, { useDebugValue, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function GetCategory({id}) {
    const [category,setCategory]=useState([])

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/category/${id}`)
        .then((res)=>{
            setCategory(res.data)
            console.log(category)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])

    return(
        <div>
            {(category.length==0)?(<div>Home</div>):(<div>{category.name}</div>)}
        </div>
    )
  
}

export default GetCategory