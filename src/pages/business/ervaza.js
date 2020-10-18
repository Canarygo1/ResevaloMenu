import React, {Component} from 'react';
import locale_sp from "../../translations/ervaza/sp.json";
import locale_fr from "../../translations/ervaza/fr.json";
import locale_it from "../../translations/ervaza/it.json";
import locale_al from "../../translations/ervaza/al.json";
import locale_en from "../../translations/ervaza/en.json";
import {IntlProvider} from "react-intl";
import Card from "../../components/organisms/card";
import DownBarLogos from "../../components/molecules/down-bar-logos";
import dataBusiness from "../../business-data/ervaza.json"
import PropTypes from "prop-types";
import Business from "../../business";

const fileLenguages = [locale_sp, locale_fr, locale_en, locale_it, locale_al];
const codeLenguage = ["es", "fr", "en", "it", "de"];

const data = dataBusiness;

class Ervaza extends Component {

    constructor(props, context) {
        super(props, context);
        let data = Business(props.properties.match.params.id)
        document.body.style.backgroundColor = data.colors[0]['body']
        document.body.style.opacity = "1"
    }

    render() {
        let codeDefault = parseInt(this.props.properties.match.params.codeDefault);
        return (<div>
                <IntlProvider locale={codeLenguage[codeDefault]} messages={fileLenguages[codeDefault]}>
                    <Card codeDefault={this.props.properties.match.params.codeDefault}
                          id={this.props.properties.match.params.id}
                          dataBusiness={data} multiLenguage={true}/>
                    <DownBarLogos urls={data["urls-website"]} colors={data["colors"]}/>
                </IntlProvider>
            </div>
        );
    }
}

Ervaza.propTypes = {
    properties: PropTypes.object.isRequired,
};

export default Ervaza;