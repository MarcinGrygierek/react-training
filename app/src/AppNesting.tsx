import { useState } from "react";
import StatefulComponent from "./StatefulComponent";
import Wrapper from "./Wrapper";

const AppNesting = () => {
    const [isVisible, setVisible] = useState(true);    
    return <Wrapper>
        <div style={{display: isVisible ? 'block' : 'none'}}>asd</div>
        Testteststest
        {isVisible && <StatefulComponent defaultName='Marcin' />}
        <Wrapper children="asd" />
    </Wrapper>
}

export default AppNesting;