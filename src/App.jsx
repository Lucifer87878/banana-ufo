import './index.css';
import Btn from './Components/Buttens/Buttens.jsx';
import Nav from './Components/Nav/Nav.jsx';
import UfoList from './Components/Ufo-List/ufolist.jsx';
import Header from './Components/Header/Header.jsx';

const App = () => {
    return ( 
        <>
            <Nav />        
            <Header/>      
            <Btn />        
            <UfoList />
        </>
    );
}

export default App;