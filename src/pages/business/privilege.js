import React, {Component} from 'react';
import locale_sp from "../../translations/privilege/sp.json";
import {IntlProvider} from "react-intl";
import Card from "../../components/organisms/card";
import DownBarLogos from "../../components/molecules/down-bar-logos";
import dataBusiness from "../../business-data/privilege.json"
import PropTypes from "prop-types";
import Business from "../../business";

const fileLenguages = [locale_sp];
const codeLenguage = ["es"];

const data = dataBusiness;

class Privilege extends Component {

    constructor(props, context) {
        super(props, context);
        let data = Business(props.properties.match.params.id)
        document.body.style.background = data.colors[0]['body']
        document.body.style.minHeight = "100vh"
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
    }

    render() {
        let codeDefault = parseInt(this.props.properties.match.params.codeDefault);
        return (<div>
                <IntlProvider locale={codeLenguage[codeDefault]} messages={fileLenguages[codeDefault]}>
                    <Card codeDefault={this.props.properties.match.params.codeDefault}
                          id={this.props.properties.match.params.id}
                          dataBusiness={data} multiLenguage={false}/>
                    <DownBarLogos urls={data["urls-website"]} colors={data["colors"]}/>
                </IntlProvider>
            </div>
        );
    }
}

Privilege.propTypes = {
    properties: PropTypes.object.isRequired,
};

export default Privilege;