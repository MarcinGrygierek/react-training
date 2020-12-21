import React from 'react';
import Hello from './Hello';
import HelloClass from './HelloClass';

// function App() {
//   return (
//     <h1>Hello World!</h1>
//   );
// }

// function App() {
//   const a = 10 * 2;
//   return (
//     <h1>{a}</h1>
//   );
// }

// function App() {
//   const a = 10 * 2;
//   return (
//     <h1 className='header' style={{ backgroundColor: 'red', fontSize: 20 }}>{a}</h1>
//   );
// }

// function App() {
//   const style = { backgroundColor: 'red', fontSize: 20 };
//   return (
//     <>
//       <h1 className='header' style={style}>Lorem ipsum</h1>
//       <h2>Dolor sit amet</h2>
//       <div>
//         <button>test</button>
//         <button>test2</button>
//       </div>
//     </>
//   );
// }

// interface Row {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// function App() {
//   const elements: Row[] = [
//     {id: 1, firstName: 'Jan', lastName: 'Kowalski'},
//     {id: 2, firstName: 'Adam', lastName: 'Nowak'},
//     {id: 3, firstName: 'Tomasz', lastName: 'Pieróg'},
//     {id: 4, firstName: 'Franciszek', lastName: 'Brzezina'},
//   ]

//   const data = elements.map((element: Row) => <div key={element.id}>
//     {element.firstName} {element.lastName}
//   </div>)

//   return (
//       <>
//       {data}
//       {/* {elements.map((element: Row) => <div key={element.id}>
//         {element.firstName} {element.lastName}
//       </div>)} */}
//     </>
//   );
// }

const App = () => {
  return <>
   <Hello />
   <HelloClass />
  </>
}


export default App;
