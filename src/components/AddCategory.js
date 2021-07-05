import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit =( e ) => {
        //Previene el comportamiento del formulario
        //Evita que se haga refresh de toda la página
        e.preventDefault();

        if ( inputValue.trim().length > 2){
            //no tengo el acceso al arreglo de categorias
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
        

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
}