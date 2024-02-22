<script src="http://localhost:8097"></script>
import './index.css';
import Btn from './Components/Buttens/Buttens.jsx';
import Nav from './Components/Nav/Nav.jsx';
import UfoList from './Components/Ufo-List/ufolist.jsx';
import Header from './Components/Header/Header.jsx';
import DemonsBox from "./Components/Demons_folder/DemonsBox.jsx";


const App = () => {
    return ( 
        <>
            <Nav />        
            <Header/>      
            <Btn />
            <section className='Disply-Cards'>   
            <UfoList /> 
            <DemonsBox />
            </section>     
        </>
    );
}

export default App;