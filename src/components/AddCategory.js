import React,{ useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleOnChange =(e)=>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(cat=>[inputValue,...cat]);
            setinputValue('')
        }
        

    }
    

  return (
      <form onSubmit={handleSubmit}>
    <input
    placeholder='¿Que gift desea buscar?'
    type="text"
    value={inputValue}
    onChange={handleOnChange}
    >
        
    </input>
    </form>
  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
