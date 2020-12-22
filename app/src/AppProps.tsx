import Card, { Skill } from "./Card";
import HelloProps from "./HelloProps"

const App = () => {
    // return <HelloProps text="Lorem ipsum" value={10} object={{a: 10, b: 20}} />
    const skills: Skill[] = [
        {id: 1, desc: 'Zaskoczenie'},
        {id: 2, desc: 'Strach'},
        {id: 3, desc: 'Skuteczność'},
        {id: 4, desc: 'Fanatyczne oddanie papieżowi'},
        {id: 5, desc: 'Piękne czerwone mundurki'}
    ];
    return <Card skills={skills} name='Marcin' />
}

export default App;