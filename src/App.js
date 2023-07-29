import { useState } from 'react';
import './App.css';
import InputPage from './Components/InputPage';
import DownloadPage from './Components/DownloadPage';

function App() {

  const [currentPage, setCurrentPage] = useState('input-page')

  return (
    <div className="App">
        <nav>
          <a href='#input-page' onClick={() => setCurrentPage('input-page')}>Upload</a>
          <a href='#download-page' onClick={() => setCurrentPage('download-page')}>Download</a>
        </nav>
        {currentPage === 'input-page' && <InputPage/>}
          {currentPage === 'download-page' && <DownloadPage/>}
    </div>
  );
}

export default App;
