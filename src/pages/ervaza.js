import React, {Component} from 'react';
import locale_sp from "../translations/ervaza/sp.json";
import locale_fr from "../translations/ervaza/fr.json";
import locale_it from "../translations/ervaza/it.json";
import locale_al from "../translations/ervaza/al.json";
import locale_en from "../translations/ervaza/en.json";
import {IntlProvider} from "react-intl";
import Card from "../components/organisms/card";
import DownBarLogos from "../components/molecules/down-bar-logos";

const fileLenguages = [locale_sp, locale_fr, locale_en, locale_it, locale_al];
const codeLenguage = ["es", "fr", "en", "it", "de"];

class Ervaza extends Component {

    render() {
        let codeDefault = parseInt(this.props.match.params.codeDefault);
        return (<div>
                <IntlProvider locale={codeLenguage[codeDefault]} messages={fileLenguages[codeDefault]}>
                    <Card codeDefault={this.props.match.params.codeDefault} id={this.props.match.params.id}/>
                    <DownBarLogos urls={["https://www.facebook.com/Ervaza-Mariscos-Frescos-1338259009531552",
                    "https://www.instagram.com/explore/locations/1338259009531552/ervaza-mariscos-frescos/?hl=es",
                    "https://ervaza.com/"]}/>

                </IntlProvider>
            </div>
        );
    }
}

export default Ervaza;