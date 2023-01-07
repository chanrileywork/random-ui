import './App.css';
import React from 'react';
import DropdownMenu from './common/DropdownMenu';
import StandardButton from './common/StandardButton';

function App() {
    const options = ['a', 'b', 'c'];
    return (
        <div className='App'>
          This is the default home page.
          <DropdownMenu headerInput="Hello World" optionsInput={options} />
          <StandardButton btnName="Submit" btnType="contained" />
          <StandardButton btnName="Disable" btnType="disabled" />
          <StandardButton btnName="Empty" btnType="outlined" />
        </div>
    );
}

export default App;
