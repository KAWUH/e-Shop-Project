import React from 'react';

export default function Filter(props) {

    const onTrigger = (event) => {
        props.categoryCallback(event.target.category.value);
        event.preventDefault();
    }

  return (
    <div className='row block column2'>
        <form onSubmit = {onTrigger}>
            <input type = "text" name = "category" placeholder = "Enter category"/>
            <input type = "submit" value = "Submit"/>
        </form>
    </div>
  );
}
