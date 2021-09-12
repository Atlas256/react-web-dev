import React from 'react';

const MySelect = ({ defaultValue, options, value, onChange }) => {

    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}>
        
            <option disabled value=''>{defaultValue}</option>
            {options.map(E => <option key={E.value} value={E.value}>{E.name}</option>)}
        </select>
    );
};

export default MySelect;