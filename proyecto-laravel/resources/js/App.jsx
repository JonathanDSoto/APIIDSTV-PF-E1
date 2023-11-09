import React from 'react'
import ReactDOM from 'react-dom/client';
import Example from './components/Example';
import Login from './pages/login';


export default function App() {

  return (
    <>
      
      <Login/>
      
    </>
  );
}



if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}