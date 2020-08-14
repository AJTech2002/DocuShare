import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sentence from './Sentence';
import Paragraph from './Paragraph';
import HTMLParser from './HtmlParse';
import WordElement from './WordElement';
import CompState from './ComponentState';
import firebase from 'firebase';


function App() {

  let fileName = "";

  const [selectedColor, setSelectedColor] = useState("#e8e85a");

  var myRef = React.createRef();


  const [clipboardText, setClipboardText] = useState(['']);


  function Sentences(paragraph, g) {
    var sents = paragraph.split('.');
    return sents.map((element, i) => <Sentence key={i.toString() + "sentat" + g.toString()} color={selectedColor}>{element}</Sentence>);
  }


  function getFromClipboard(e) {

    navigator.clipboard.readText().then((text) => {
      if (text !== "") {
        setClipboardText(text.trim());
      }
    });
  }

  function getClipboardData(e) {
    var v = e.clipboardData.getData("text/html");

    var start = v.indexOf("<!--StartFragment-->") + 20;
    var end = v.indexOf("<!--EndFragment-->");

    var substr = v.substring(start, end);


    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(substr, "text/html");



    //console.log(htmlDoc.getElementsByTagName("body")[0].out);
    let paras = htmlDoc.getElementsByTagName("body")[0].getElementsByTagName("p");
    let extractedParagraphs = [];

    for (let i = 0; i < paras.length; i++) {
      extractedParagraphs.push(paras[i].outerHTML);
      //State Management
      window.mapping[paras[i].outerHTML] = new CompState(false, "white");
    }


    setClipboardText(extractedParagraphs);

    console.log(substr);

    console.log(mapped);


    //setClipboardText({ __html: substr });
    return substr;

  }

  function stringToHash(string) {

    var hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return hash;
  }


  async function deleteDoc(name) {
    await firebase.firestore().collection("simple_text")
      .doc(name).collection("sentences").get().then((snap2) => {

        snap2.forEach(element => {

          element.ref.delete();

        });

      });

  }

  function saveEverything() {

    if (myRef.current.value.toString() !== "")
      deleteDoc(myRef.current.value.toString()).then(() => {
        //Hashing Paragraph element so that it can be easily stored in DB

        for (var key in window.mapping) {
          var doc = window.database.collection("simple_text").doc(myRef.current.value.toString()).collection("sentences").doc(stringToHash(key.toString()).toString())
            .set({
              html: key.toString(),
              active: window.mapping[key].getActive(),
              color: window.mapping[key].getCol(),
            });
        }
      });
  }



  console.log(selectedColor);

  document.addEventListener("paste", getClipboardData);

  var mapped = clipboardText.map((element, i) => <Sentence key={i.toString() + "sentat"} color={selectedColor} inner={element}></Sentence>);

  /*
  var elements = [];

  var paragraphs = clipboardText.split('\n');


  elements = paragraphs.map((para, i) => <Paragraph key={i.toString() + "Para"}>{Sentences(para, i)}</Paragraph>);
  */

  return (
    <div className="App">



      <div id="wholewrap">
        <div id="mainsec">
          <div id="topbar">
            <input type="text" ref={myRef} className="textField" placeholder="File Name" ></input>
            <button onClick={saveEverything} className="saveButton" style={{ margin: 20 }}>Save</button>
          </div>
          <div id="textsec" >

            {mapped}

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