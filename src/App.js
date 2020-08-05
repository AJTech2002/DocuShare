import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sentence from './Sentence';
import Paragraph from './Paragraph';



function App() {

  const [clipboardText, setClipboardText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#e8e85a");

  function Sentences(paragraph, g) {
    var sents = paragraph.split('.');
    return sents.map((element, i) => <Sentence key={i.toString() + "sentat" + g.toString()} color={selectedColor}>{element}</Sentence>);
  }


  function getFromClipboard() {
    navigator.clipboard.readText().then((text) => {
      if (text !== "") {
        setClipboardText(text.trim());
      }
    });
  }

  var elements = [];

  var paragraphs = clipboardText.split('\n');


  elements = paragraphs.map((para, i) => <Paragraph key={i.toString() + "Para"}>{Sentences(para, i)}</Paragraph>);

  return (
    <div className="App">



      <div id="wholewrap">
        <div id="mainsec">
          <div id="topbar" onClick={getFromClipboard}>

          </div>
          <div id="textsec">

            {elements}

          </div>
        </div>
        <div id="sidebar">
          <div id="colorbar">
            <div className="colorSel" style={{ backgroundColor: '#f56c42' }} onClick={() => setSelectedColor("#f56c42")}></div>
            <div className="colorSel" style={{ backgroundColor: '#aa5beb' }} onClick={() => setSelectedColor("#aa5beb")}></div>
            <div className="colorSel" style={{ backgroundColor: '#5cdaed' }} onClick={() => setSelectedColor("#5cdaed")}></div>
            <div className="colorSel" style={{ backgroundColor: '#e85aa6' }} onClick={() => setSelectedColor("#e85aa6")}></div>
            <div className="colorSel" style={{ backgroundColor: '#9de65a' }} onClick={() => setSelectedColor("#9de65a")}></div>
            <div className="colorSel" style={{ backgroundColor: '#e8e85a' }} onClick={() => setSelectedColor("#e8e85a")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

