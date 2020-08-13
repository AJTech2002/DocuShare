
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

    if (props.inner.includes("&nbsp;")) {
        return (
            <div className="breakElement"></div>
        );
    }

    if (active) {
        return (

            <div onClick={() => {
                if (myColor !== props.color) {
                    setMyColor(props.color);
                } setActive(!active);
            }} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement" style={{ 'background': myColor }} dangerouslySetInnerHTML={{ __html: props.inner }}>
                {props.children}
            </div>

        );
    }
    else {
        return (
            <div onClick={() => {
                if (myColor !== props.color) {
                    setMyColor(props.color);
                } setActive(!active);
            }} onMouseEnter={checkClick} onMouseMove={checkClick} className="hoverElement" dangerouslySetInnerHTML={{ __html: props.inner }}>
                {props.children}
            </div>
        );
    }

}

export default Sentence;