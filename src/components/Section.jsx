import { useState, useEffect } from 'react';
import { UserCard } from './usecard/UserCard';
import './section.css';

export const Section = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  // Aquí se aplica el filtro:
  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container">
      <h2 className="section-title">{count}</h2>
      <button onClick={handleClick}>Contador</button>

      <input
  type="text"
  className="search-input"
  placeholder="Buscar usuario por nombre, correo o ciudad..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


      <section className="cards-container">
        {filteredUsers.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center' }}>No se encontraron usuarios</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </section>
    </div>
  );
};
 