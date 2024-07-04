import React, {useState} from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';




// import './App.css';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */

const TextForm = (props) => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda laboriosam iusto excepturi dolores velit consequuntur magni non, corporis ipsa libero? Assumenda quaerat, iste omnis veniam adipisci eligendi sapiente! Sequi laboriosam accusamus, consectetur iste cum sint possimus doloribus libero, magni, atque ad eum eos velit. Aperiam itaque ratione obcaecati repellendus deleniti.");
    
    const handleUppercaseClick = ()=>{
        // console.log("Uppercase is clicked.")
        let upText = text.toUpperCase();
        setText(upText);
    }

    const handleLowercaseClick =()=>{
        let upText = text.toLowerCase();
        setText(upText);
    }

    // function titleCase(st) {
    //     return st.toLowerCase().split(" ").reduce((s, c) =>
    //         s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
    // }

    function toTitleCase(str) {
        const words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return words.join(' ');
    }

    const handleTitlecaseClick =()=>{
        let upText = toTitleCase(text);
        setText(upText);
    }

    function toSentenceCase(str) {
        const sentences = str.match(/[^.!?]*[.!?]*\s*/g) || [];
        const sentenceCaseStr = sentences.map(sentence => {
            sentence = sentence.trim();
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }).join(' ');
    
        return sentenceCaseStr.trim();
    }

    const handleSentencecaseClick = ()=>{
        let upText = toSentenceCase(text);
        setText(upText);
    }

    function toAlternatingCase(str) {
        return str.split('').map((char, index) => {
            return index % 2 == 0 ? char.toLowerCase() : char.toUpperCase();
        }).join('');
      }

    const handleAlternatingcaseClick = ()=>{
        let upText = toAlternatingCase(text);
        setText(upText);
    }

    const handleCopyClick = ()=>{
        let copyText = document.getElementById("wordHuntTextArea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleClearClick = ()=>{
        let clearAreaText = ""
        setText(clearAreaText);
    }

    const handleRemoveExtraSpacesClick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (e)=>{
        // console.log("OnChange is attempted.")
        setText(e.target.value);
    }
    
    return <div>
        <>
            <div className="mb-3">
                <h3>{props.headings}</h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="wordHuntTextArea" rows="5"></textarea>
                </div>
                <div className='button-container'>
                    <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to uppercase</button>
                    <button className="btn btn-primary" onClick={handleLowercaseClick}>Convert to lowercase</button>
                    <button className="btn btn-primary" onClick={handleTitlecaseClick}>Convert to titlecase</button>
                    <button className="btn btn-primary" onClick={handleSentencecaseClick}>Convert to sentencecase</button>
                    <button className="btn btn-primary" onClick={handleAlternatingcaseClick}>Convert to alternatingcase</button>
                    <button className="btn btn-primary" onClick={handleCopyClick}>Copy to clipboard</button>
                    <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary" onClick={handleRemoveExtraSpacesClick}>Remove extra spaces</button>
                </div>
            </div>
            <div>
                <h3>Text summary</h3>
                    <ul>
                        <li><p>Number of <b>words {text == "" || text == " "? 0 : text.split(" ").length}</b> and number of <b>charater {text.length}</b>.</p></li>
                        <li><p>Minutes required to read: <b>{0.008 * text.split(" ").length} m</b></p></li>
                    </ul>
                    
                <h3>Preview</h3>
                <p className="beautiful-border">{text}</p>
            </div>
        </>
    </div>;
}

TextForm.propTypes = {
    headings: PropTypes.string.isRequired
};
TextForm.defaultProps = {
    headings: 'Lorem ipsum'
};
// #endregion

export default TextForm;