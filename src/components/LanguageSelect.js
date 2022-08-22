import React from "react";
import ReactLanguageSelect from 'react-languages-select';
import { useState } from "react";
import 'react-languages-select/css/react-languages-select.css';
// import 'react-languages-select/scss/react-languages-select.scss';





const LanguageSelect = () => {


    const [selectedLang, setLang] = useState('');

    function onSelectLanguage(languageCode) {
        setLang(languageCode);
        console.log(languageCode);
    }

  

    return (
        <>

            <h1>Language Puzzle</h1>
            <ReactLanguageSelect
                defaultLanguage="en"
                searchable={true}
                searchPlaceholder="Search for a language"
                onSelect={onSelectLanguage}
            />

            <h6>The selected language is <h4> {selectedLang} </h4> </h6>


            
        </>

    );
}

export default LanguageSelect;