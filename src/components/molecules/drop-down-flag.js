import React, {useState} from 'react';
import Flag from 'react-world-flags'
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

const flags = ["es","fr","gb","it","de"];

function DropDownFlag({codeDefault}) {
    let [lenguageDefault, setLenguageDefault] = useState(codeDefault);
    return (
        <div style={{alignSelf:"center"}}>
            <Dropdown className={"dropClass"}>
                <Dropdown.Toggle id="toggle-drop" variant={"secondary"}>
                    <Flag code={flags[lenguageDefault]}
                          height="20"
                          fallback={ <span>Unknown</span> }
                          style={{marginRight:10}}/>
                </Dropdown.Toggle>

                <Dropdown.Menu className={"menu-drop"}>
                    <Dropdown.Item id={"item-drop-lenguage"} eventKey="0" onSelect={(eventKey) => setLenguageDefault(lenguageDefault = eventKey)}>
                        <Flag code={flags[0]} height={20} fallback={ <span>Unknown</span> }/>
                    </Dropdown.Item>
                    <Dropdown.Item id={"item-drop-lenguage"} eventKey="1" onSelect={(eventKey) => setLenguageDefault(lenguageDefault = eventKey)}>
                        <Flag code={flags[1]} height={20} fallback={ <span>Unknown</span> }/>
                    </Dropdown.Item>
                    <Dropdown.Item id={"item-drop-lenguage"} eventKey="2" onSelect={(eventKey) => setLenguageDefault(lenguageDefault = eventKey)}>
                        <Flag code={flags[2]} height={20} style={{width:30}} fallback={ <span>Unknown</span> }/>
                    </Dropdown.Item>
                    <Dropdown.Item id={"item-drop-lenguage"} eventKey="3" onSelect={(eventKey) => setLenguageDefault(lenguageDefault = eventKey)}>
                        <Flag code={flags[3]} height={20} fallback={ <span>Unknown</span> }/>
                    </Dropdown.Item>
                    <Dropdown.Item id={"item-drop-lenguage"} eventKey="4" onSelect={(eventKey) => setLenguageDefault(lenguageDefault = eventKey)}>
                        <Flag code={flags[4]} height={20} fallback={ <span>Unknown</span> }/>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

DropDownFlag.propTypes = {
    codeDefault:PropTypes.number.isRequired,
};

export default DropDownFlag;
