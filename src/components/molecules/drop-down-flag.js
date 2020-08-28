import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import 'flag-icon-css/css/flag-icon.css';

const flags = ["es","fr","gb","it","de"];

function DropDownFlag({codeDefault, id}) {

    return (
        <div style={{alignSelf:"center"}}>
            <Dropdown className={"dropClass"}>
                <Dropdown.Toggle id="toggle-drop" variant={"secondary"}>
                    <span className={`flag-icon flag-icon-${flags[codeDefault]} flag-drop`}></span>
                </Dropdown.Toggle>
              <Dropdown.Menu className={"menu-drop"}>
                <Dropdown.Item id={"item-drop-lenguage"}>
                  <div onClick={() => window.location.replace(`/cartas/${id}/0`)}>
                      <span className="flag-icon flag-icon-es flag-drop"></span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id={"item-drop-lenguage"}>
                  <div onClick={() => window.location.replace(`/cartas/${id}/1`)}>
                      <span className="flag-icon flag-icon-fr flag-drop"></span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id={"item-drop-lenguage"}>
                  <div onClick={() => window.location.replace(`/cartas/${id}/2`)}>
                      <span className="flag-icon flag-icon-gb flag-drop"></span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id={"item-drop-lenguage"}>
                  <div onClick={() => window.location.replace(`/cartas/${id}/3`)}>
                      <span className="flag-icon flag-icon-it flag-drop"></span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id={"item-drop-lenguage"}>
                  <div onClick={() => window.location.replace(`/cartas/${id}/4`)}>
                      <span className="flag-icon flag-icon-de flag-drop"></span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

DropDownFlag.propTypes = {
    codeDefault:PropTypes.number.isRequired,
    id:PropTypes.string.isRequired,
};

export default DropDownFlag;
