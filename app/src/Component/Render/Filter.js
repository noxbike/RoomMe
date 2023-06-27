import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDataBySearch } from '../../feature/autocomplete/dataSlice'

export default function Filter() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (value) => {
    dispatch(getDataBySearch(value))
    setInputValue(value)
  }

  return (
    <div className='autoComplete'>
        <input 
          type='text'
          placeholder='Title, genre, author' 
          value={ inputValue }
          onChange={ (e)=> handleChange(e.target.value) }
        />
    </div>
  )
}