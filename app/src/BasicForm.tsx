import { SyntheticEvent, useState } from "react";

const BasicForm = () => {
    const [name, setName] = useState<string>('Marcin');
    const [age, setAge] = useState<number>();
    const [rulesAccepted, acceptRules] = useState<boolean>(false);
    // const handleChange = (e: any) => {
    //     setName(e.target.value);
    // }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if(!name) { alert('Imię jest wymagane!'); return }
        if(!age || age < 18) { alert('Musisz być pełnoletni!'); return }
        if(!rulesAccepted) { alert('Musisz zaakceptować regulamin!'); return }
        alert('Wszystko ok!');

    }

    return <form onSubmit={handleSubmit}>
        {/* <input type='text' value={name} onChange={handleChange}/> */}
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <input type='number' value={age} onChange={e => setAge(Number(e.target.value))} />
        <label htmlFor="rules">Akceptuję regulamin</label>
        <input id="rules" type='checkbox' checked={rulesAccepted} onChange={e => acceptRules(e.target.checked)} />
        <button type='submit'>Send</button>
    </form>
}

export default BasicForm;