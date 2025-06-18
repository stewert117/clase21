import jefeImg from '../assets/jefe3.png';
import espadasImg from '../assets/espadas2.png';
import coeteImg from '../assets/coete1.png';
import './Section.css';

const users = [
  {
    id: 1,
    name: 'COHETE🚀',
    description: '🚀',
    image: coeteImg
  },
  {
    id: 2,
    name: 'ESPARTAN',
    description: '🪖',
    image: espadasImg
  },
  {
    id: 3,
    name: '𝐉𝐞𝐟𝐞 𝐌𝐚𝐞𝐬𝐭𝐫𝐨',
    description: '🐂',
    image: jefeImg
  }
];

const handleClick = (name) => {
  alert(`Estás contactando a ${name}`);
};

export const Section = () => {
  return (
    <div className="cards-container">
      {users.map(({ id, name, description, image }) => (
        <div className="card" key={id}>
          <img className="image" src={image} alt={name} />
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
          <button id={id} onClick={() => handleClick(name)}>Contactar</button>
        </div>
      ))}
    </div>
  );
};