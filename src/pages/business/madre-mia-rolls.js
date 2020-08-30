import React, {Component} from 'react';
import locale_sp from "../../translations/madre-mia-rolls/sp.json";
import {IntlProvider} from "react-intl";
import Card from "../../components/organisms/card";
import DownBarLogos from "../../components/molecules/down-bar-logos";
import dataBusiness from "../../business-data/madre-mia-rolls.json"
import PropTypes from "prop-types";

const fileLenguages = [locale_sp];
const codeLenguage = ["es"];

const data = dataBusiness;

class MadreMiaRolls extends Component {

    render() {
        let codeDefault = parseInt(this.props.properties.match.params.codeDefault);
        return (<div>
                <IntlProvider locale={codeLenguage[codeDefault]} messages={fileLenguages[codeDefault]}>
                    <Card codeDefault={this.props.properties.match.params.codeDefault}
                          id={this.props.properties.match.params.id} dataBusiness={data}
                          multiLenguage={false}/>
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