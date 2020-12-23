import {SyntheticEvent, useState} from 'react';

const Form = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const [inputValueA, setInputValueA] = useState<number>();
	const [inputValueB, setInputValueB] = useState<number>();
	const handlerSubmit = (e: SyntheticEvent) => {
    	e.preventDefault();
    	if(!inputValue) {alert('podaj wartosc'); return}
    	if((!inputValueA && inputValueA !==0) || (!inputValueB && inputValueB !== 0)) {alert('podaj wartosc'); return}
    	alert(`${inputValue}: ${inputValueA + inputValueB}`);
	}
	return (
    	<>  
        	<h1>{!!(inputValueA && inputValueB) && (inputValueA + inputValueB)}</h1>
        	<form onSubmit = {handlerSubmit}>
            	<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            	<input type="number" value={inputValueA} onChange={(e) => setInputValueA(Number(e.target.value))} />
            	<input type="number" value={inputValueB} onChange={(e) => setInputValueB(Number(e.target.value))} />
            	<button type='submit'>Send</button>
        	</form>
    	</>

	)
}

export default Form;