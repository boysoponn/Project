import React, { Component } from 'react';
import firebase from 'firebase';

class InputUpload extends Component {

    constructor(props) {
        super(props);
        this.state = { file: null };
        this.handleChange = this.handleChange.bind(this);
        this.uploadToFirebase = this.uploadToFirebase.bind(this);
    }

    handleChange(event) {
        const file = event.target.files[0];
        this.setState({ file });
    }

    uploadToFirebase() {
        const storageRef = firebase.storage().ref();
        storageRef.child(`images/${this.state.file.name}`)
            .put(this.state.file).then((snapshot) => {
            alert('File has been uploaded!');
        });
    }

    render() {
        return (
            <div>
                <h1>Firebase Upload Example</h1>
                <input type="file" onChange={this.handleChange} /><br />
                <button onClick={this.uploadToFirebase}>Upload</button>
            </div>
        );
    }
}

export default InputUpload;