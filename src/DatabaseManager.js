import React from 'react'
import config from './DatabaseConfig';
import firebase from 'firebase';
import firebaseConfig from './DatabaseConfig';

class Database {

    constructor() {
        const app = firebase.initializeApp(firebaseConfig);

        var database = firebase.firestore();
        database.settings(
            {
                timestampsInSnapshots: true
            }
        );

        /*
        database.collection("simple_text").add({
            text: "thisText"
        });*/

        window.database = database;

        /*Constructing this data:
        - Global Map of innerHTMLString to the State of it, State managed in a
            class.
        - This map {map} is then mapped to a string which is 'programState:{map}'
        - So this is a tri-mappng of the data
        */


    }

}

export default Database;