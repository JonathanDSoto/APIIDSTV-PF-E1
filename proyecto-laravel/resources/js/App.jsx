import React from 'react'
import ReactDOM from 'react-dom/client';
import Example from './components/Example';


export default function App() {

  return (
    <>
      
      <div className='p-20 bg-slate-400'></div>
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