
import React, { useState } from 'react'




function Sentence(props) {

    const [active, setActive] = useState(false);
    const [myColor, setMyColor] = useState(props.color);



    function checkClick(e) {



        if (e.buttons == 1 && !e.shiftKey) {
            if (myColor !== props.color) {
                setMyColor(props.color);
            }
            setActive(true);
        }
        if (e.buttons == 1 && e.shiftKey) {
            setActive(false);
        }
    }

    if (active) {
        return (

            <span onClick={() => {
                if (myColor !== props.color) {
                    setMyColor(props.color);
                } setActive(!active);
            }} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement" style={{ 'background': myColor }}>
                {props.children}
            </span>

        );
    }
    else {
        return (
            <span onClick={() => {
                if (myColor !== props.color) {
                    setMyColor(props.color);
                } setActive(!active);
            }} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement">
                {props.children}
            </span>
        );
    }

}

export default Sentence;