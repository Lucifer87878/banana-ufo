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
            <section className='Header-h1'>       
            <Header/>
            </section>
            <section className='BTN-F'>       
            <Btn />
            </section>
            <section className='Info-Box'>
            <section className='UFO-Ls'>
            <UfoList /> 
            </section>
            <section className='Disply-Cards'>   
            <DemonsBox />
            </section>  
            </section>     
        </>
    );
}

export default App;