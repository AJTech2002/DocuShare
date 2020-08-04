
import React, { useState } from 'react'




function Sentence(props) {

    const [active, setActive] = useState(false);

    function checkClick(e) {
        if (e.buttons == 1 && !e.shiftKey) {
            setActive(true);
        }
        if (e.buttons == 1 && e.shiftKey) {
            setActive(false);
        }
    }

    if (active) {
        return (

            <span onClick={() => setActive(!active)} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement" style={{ 'background': props.color }}>
                {props.children}
            </span>

        );
    }
    else {
        return (
            <span onClick={() => setActive(!active)} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement">
                {props.children}
            </span>
        );
    }

}

export default Sentence;