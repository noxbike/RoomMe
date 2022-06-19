import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { input } from '../../feature/autocomplete/dataSlice'

function Filter() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const change = (param) => {
    dispatch(input(param))
    setValue(param)
  }

  return (
    <div className='autoComplete'>
        <input type='text' placeholder='Title, genre, author' value={value} onChange={(e)=> change(e.target.value)}/>
    </div>
  )
}

export default Filter