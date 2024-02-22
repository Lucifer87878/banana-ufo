import './Demons.css';

const Demons = ({name, origin, role, imge_url}) => {
  return (
    <>
      <div className='DemonsContainer'>
        <p>Name: {name}, Origin: {origin}, Role:{role}</p>
        <img className='DemonsImage' src={imge_url} alt={`${name} demons`} />
      </div>
    </>
  );
  
}

export default Demons;