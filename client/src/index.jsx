import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

// Router
import { BrowserRouter } from 'react-router-dom';

// React 17 Syntax
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// React 18 Syntax
// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered');
//   });

// return <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ;
// }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// root.render(<AppWithCallbackAfterRender />);
