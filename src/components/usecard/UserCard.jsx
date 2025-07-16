import { useState } from "react";

export const UserCard = ({ user }) => {
  const [isContacted, setIsContacted] = useState(false);
  const { id, firstName, lastName, email, age, gender, phone, image, address } = user;

  const handleClick = () => {
    setIsContacted(!isContacted);
  };

  return (
    <div className="card">
      <img className="image" src={image} alt={`${firstName} ${lastName}`} />
      <h2 className="name">{firstName} {lastName}</h2>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
      <p>Ciudad: {address.city}</p>
      <p>Teléfono: {phone}</p>
      <p>Género: {gender}</p>
      <button onClick={handleClick}>
        {isContacted ? 'Contactado' : 'Contactar'}
      </button>
    </div>
  );
};
