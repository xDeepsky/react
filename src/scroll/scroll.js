import React from 'react';


const ScrollBtn = (props) => {
    return (
        <div className={props.pos}>
            <p>{props.title}</p>
            <button
                className="scroll-button"/>
        </div>
    )
}

export default ScrollBtn;