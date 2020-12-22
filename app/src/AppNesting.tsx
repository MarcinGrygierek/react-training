import { useState } from "react";
import StatefulComponent from "./StatefulComponent";
import Wrapper from "./Wrapper";

const AppNesting = () => {
    const [isVisible, setVisible] = useState(true);    
    return <Wrapper>
        Testteststest
        {isVisible && <StatefulComponent defaultName='Marcin' />}
        <Wrapper>Lorem ipsum</Wrapper>
    </Wrapper>
}

export default AppNesting;