import React from "react";
import {FormattedMessage, IntlProvider} from 'react-intl';
import './App.css';
import locale_en from "./translations/en.json"
import locale_fr from "./translations/fr.json";
import locale_al from "./translations/al.json";
import locale_it from "./translations/it.json";
import locale_sp from "./translations/sp.json";

const data = {
    'sp': locale_sp,
    'en': locale_en,
    'fr': locale_fr,
    'al': locale_al,
    'it': locale_it,
};

const language = "sp";

function App() {
    return (
        <IntlProvider locale={language} messages={data[language]}>
            <div className="App">
                <p>
                    <FormattedMessage
                        id="combo.2"
                        defaultMessage="Hello, welcome"
                        description="Welcome message"
                        values={{ user: "John Doe", pepe: "Antonio" }}/>
                        <h1></h1>
                    <FormattedMessage
                        id="combo.price.2"
                        defaultMessage="No tiene valor."
                        description="Welcome message"/>
                </p>
            </div>
        </IntlProvider>
    );
}

export default App;
