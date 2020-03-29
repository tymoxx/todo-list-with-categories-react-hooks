import React from 'react';

export const Filters = (props) => {

    const {todos, changeFilter, currentCategory} = props;

    const uniqueSetOfCategories = new Set(todos.map(todo => todo.category));

    let optionsJSX = [];

    uniqueSetOfCategories.forEach((category) => {
        optionsJSX.push(<option key={category} value={category}>{category}</option>);
    });

    const handleChangeCategory = event => {
        changeFilter(event.target.value);
    };

    return (
        <div className='App'>
            <select onChange={(event) => handleChangeCategory(event)} value={currentCategory}>
                {optionsJSX}
            </select>
        </div>
    );
};