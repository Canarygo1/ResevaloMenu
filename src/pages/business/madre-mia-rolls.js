import React, {Component} from 'react';
import locale_sp from "../../translations/madre-mia-rolls/sp.json";
import locale_fr from "../../translations/madre-mia-rolls/fr.json";
import locale_it from "../../translations/madre-mia-rolls/it.json";
import locale_al from "../../translations/madre-mia-rolls/al.json";
import locale_en from "../../translations/madre-mia-rolls/en.json";
import {IntlProvider} from "react-intl";
import Card from "../../components/organisms/card";
import DownBarLogos from "../../components/molecules/down-bar-logos";
import dataBusiness from "../../business-data/madre-mia-rolls.json"
import PropTypes from "prop-types";
import Business from "../../business";

const fileLenguages = [locale_sp, locale_fr, locale_en, locale_it, locale_al];
const codeLenguage = ["es", "fr", "en", "it", "de"];

const data = dataBusiness;

class MadreMiaRolls extends Component {

    constructor(props, context) {
        super(props, context);
        let data = Business(props.properties.match.params.id)
        document.body.style.backgroundColor = data.colors[0]['body']
    }

    render() {
        let codeDefault = parseInt(this.props.properties.match.params.codeDefault);
        return (<div>
                <IntlProvider locale={codeLenguage[codeDefault]} messages={fileLenguages[codeDefault]}>
                    <Card codeDefault={this.props.properties.match.params.codeDefault}
                          id={this.props.properties.match.params.id} dataBusiness={data}
                          multiLenguage={true}/>
                    <DownBarLogos urls={data["urls-website"]}/>
                </IntlProvider>
            </div>
        );
    }
}

MadreMiaRolls.propTypes = {
    properties: PropTypes.object.isRequired,
};

export default MadreMiaRolls;