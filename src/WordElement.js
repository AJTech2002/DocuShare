import getUniqueKey from "./utils/idGen";
import React from 'react';
import Sentence from './Sentence';
import './App';

class WordElement {

    elementType = "p";

    containsRawText = false;

    rawText = "";

    childrenElements = [];

    depth = 0;

    rawHTML = "";


    constructor(type, rawHTML, depth) {
        this.elementType = type;
        this.rawHTML = rawHTML;
        this.depth = depth;
    }

    traverse() {

    }

    subText(str = "") {
        let hitCount = 0;

        for (let index = 0; index < str.length; index++) {
            const element = str.charAt(index);

            if (element === '<' && hitCount === 0) {
                hitCount = 1;

            }

        }

    }

    getPureSentenceElement() {
        if (this.containsRawText) {
            console.warn("this.selectedColor really isn't doing anything, you'll have to get state");
            return <Sentence key={getUniqueKey()} color={this.selectedColor}>{this.rawText}</Sentence>;
        }
        else {

        }
    }

}

export default WordElement;