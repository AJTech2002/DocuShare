import React, { Component, createRef, useState } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';



class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.searchRef = createRef();
        this.state = {
            queryResults: ["a", "b"]
        };

        this.getDocumentsWithText = this.getDocumentsWithText.bind(this);
        this.parseResults = this.parseResults.bind(this);
    }

    getDocumentsWithText() {

        let value = this.searchRef.current.value;

        //On Save encode document name into parent field for retrieval
        console.log(value);
        let results = [];

        window.database.collection("simple_text")
            .get()
            .then((querySnap) => {
                querySnap.forEach(function (doc) {
                    if (doc.data()["name"].includes(value)) {
                        results.push(doc.data()["name"]);
                        console.log(results);

                    }
                    else {

                        let fileTags = doc.data()["tags"];

                        for (let index = 0; index < fileTags.length; index++) {
                            const element = fileTags[index];

                            if (element.toString() == value) {
                                results.push(doc.data()["name"]);
                                console.log(results);

                            }
                        }
                    }

                });
            }).then(() => {


                this.setState({
                    queryResults: results
                });

            });



    }


    parseResults() {
        return this.state.queryResults.map((v, i) => <li key={i.toString() + "II"}>{v}</li>);
    }

    render() {

        console.log(this.state.queryResults);

        return (
            <div>
                <div id="tophalf">
                    <Link to="/"><button>Back</button></Link>
                    <input type="text" ref={this.searchRef} placeholder="Search Request"></input>
                    <button onClick={this.getDocumentsWithText}>Search</button>
                </div>
                <div id="searchResults">
                    {this.state.queryResults.map(function (item, i) {
                        return <li key={i.toString()}>{item}</li>;
                    })}
                </div>
            </div>
        );
    }
}

export default SearchPage;