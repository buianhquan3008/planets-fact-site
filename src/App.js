import { useState } from 'react';
import Content from './components/Content';
import DetailContent from './components/DetailContent';
// import data from '../data.json';

const { Navbar } = require('./components/Navbar');

function App() {
    const [planetId, setPlanetId] = useState(0);
    const [content, setContent] = useState('overview');

    return (
        <div className='app'>
            <Navbar planetId={planetId} setPlanetId={setPlanetId} />
            <Content
                planetId={planetId}
                setPlanetId={setPlanetId}
                content={content}
                setContent={setContent}
            />
            <DetailContent
                planetId={planetId}
                setPlanetId={setPlanetId}
                content={content}
                setContent={setContent}
            />
        </div>
    );
}

export default App;
