import Content from './components/Content';
import DetailContent from './components/DetailContent';

const { Navbar } = require('./components/Navbar');

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Content />
            <DetailContent />
        </div>
    );
}

export default App;
