import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {onNewCategory} ) => {

  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValueTrimmed = inputValue.trim();
    if(inputValueTrimmed.length <= 1) return;

    // setCategories( (categories) => [inputValueTrimmed, ...categories]);
    setInputValue('');
    onNewCategory( inputValueTrimmed );
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs animados"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );

}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}