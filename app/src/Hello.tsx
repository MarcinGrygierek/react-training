 const Hello = () => {
     const userInput = window.prompt('Podaj liczbę');
     const number = userInput ? parseInt(userInput) : 0;
     if(isNaN(number)) return <h1>Musisz podać liczbę</h1>
     return <h1>{2 * number}</h1>
 }

export default Hello;