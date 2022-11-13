import Content from './components/Content';

const { Navbar } = require('./components/Navbar');

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Content></Content>
        </div>
    );
}

export default App;
