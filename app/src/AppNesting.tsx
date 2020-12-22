import React, { useState } from "react";
import ButtonNested from "./ButtonNested";
import StatefulComponent from "./StatefulComponent";
import Wrapper from "./Wrapper";

const AppNesting = () => {
    const [isVisible, setVisible] = useState(true);    
    return <Wrapper>
        <div style={{display: isVisible ? 'block' : 'none'}}>asd</div>
        Testteststest
        {isVisible && <StatefulComponent defaultName='Marcin' />}
        <Wrapper children="asd" />
        <ButtonNested handleClick={() => setVisible(is => !is)} />
    </Wrapper>
}

export default AppNesting;