import './DemonsBox.css';
import Demons from '../Demons/Demons';
import demonsData from './DemonsData.json';

const DemonsBox = () => {
  const data = demonsData.demons;

  return (
    <>
      {/* <h1>Demons Box</h1> */}
      {data.map((demon) => (
        <Demons
          key={demon.name}
          name={demon.name}
          origin={demon.origin}
          role={demon.role}
          imge_url={demon.imge_url}
        />
      ))}
    </>
  );
};

export default DemonsBox;
