import React from 'react'
import { Button, Empty } from 'antd'
import {useNavigate} from 'react-router-dom'

function EmptyComp() {
    const navigate = useNavigate();

    const btnHandler=()=>{
        navigate('/')
    }

  return (
    <Empty className='flex flex-col items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    description={
      <span>
        There are no notes here
      </span>
    }
  >
    <Button className='bg-red-600 hover:bg-red-400 hover:border-red-400 text-white' onClick={btnHandler}>Back to Home</Button>
  </Empty>
  )
}

export default EmptyComp