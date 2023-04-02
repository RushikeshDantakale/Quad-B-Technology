import React from 'react';
import './Ticker.css'

const Ticker = ( props ) => {
    const {name , last , buy , sell, volume , base_unit} = props.ticker;
    return (
        <div className='main-div'>
            <div className='sr_no_value'><div>{props.index+1}</div></div>
            <div className='name_value'><div>{name}</div></div>
            <div className='name_value'><div>{last}</div></div>
            <div className='buy_sell_value'><div>₹ {buy}/₹ {sell}</div></div>
            <div className='name_value'><div>{volume}</div></div>
            <div className='base_unit_value'><div>{base_unit}</div></div>
        </div>
    );
}

export default Ticker;
