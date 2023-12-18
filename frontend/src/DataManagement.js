import React from "react";
import {Button} from "react-bootstrap"

const DataManagement = ({ dataCharacterDetails}) => {

const handleDataAssembly = () => {

    const finalAssembledData = {
        characterDetails:dataCharacterDetails,
    }
    console.log("Final data Assembly to be Jsonified:", finalAssembledData)
}

return (
    <div>
    <Button variant="primary" onClick={handleDataAssembly}>Save Character</Button>
    </div>
)
}
export default DataManagement