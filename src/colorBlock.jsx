import React from 'react'

const ColorBlock = (props) => {
    return (
        <div className="colorBlocck"
            style={{ 'backgroundcolor': props.color }}>
            <p> {props.color} </p>
        </div>
    )
}

export default ColorBlock