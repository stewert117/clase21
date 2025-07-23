
import { useState, useEffect } from 'react';
import './section.css';
import portada from '../assets/coete1.png';

// Card para videojuegos
const GameCard = ({ game, onAddToCart }) => (
  <div className="card">
    <img src={game.thumbnail} alt={game.title} className="image" />
    <h3 className="name">{game.title}</h3>
    <p className="description">{game.short_description}</p>
    <p style={{ color: '#ee03ee', fontWeight: 'bold' }}>${game.price || 'Gratis'}</p>
    <button onClick={() => onAddToCart(game)}>Agregar al carrito</button>
  </div>
);

export const Section = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then((res) => res.json())
      .then((data) => {
        // Simular precio para cada juego
        const gamesWithPrice = data.slice(0, 30).map((game, i) => ({
          ...game,
          price: (i % 2 === 0) ? (Math.floor(Math.random() * 40) + 10) : 'Gratis',
        }));
        setGames(gamesWithPrice);
      })
      .catch(() => {
        // Si la API falla, agrega un videojuego de ejemplo local
        setGames([
          {
            id: 1,
            title: 'Super Mario Bros',
            short_description: 'Clásico juego de plataformas.',
            thumbnail: portada,
            price: 20
          },
          {
            id: 2,
            title: 'The Legend of Zelda',
            short_description: 'Aventura y exploración.',
            thumbnail: portada,
            price: 30
          }
        ]);
      });
  }, []);

  // Filtrado de juegos
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.short_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agregar al carrito
  const handleAddToCart = (game) => {
    setCart((prev) => [...prev, game]);
  };

  // Eliminar del carrito
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((g, idx) => idx !== id));
  };

  return (
    <div className="section-container">
      {/* Imagen decorativa de videojuego */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <img src={portada} alt="Portada videojuego" style={{ width: 120, borderRadius: 16, boxShadow: '0 2px 12px #0005' }} />
        <h2 className="section-title">Videojuegos</h2>
      </div>

      {/* Carrito de compras */}
      <div style={{ background: '#292929', color: '#fff', borderRadius: 10, padding: 16, marginBottom: 24 }}>
        <h3 style={{ margin: 0 }}>🛒 Carrito ({cart.length})</h3>
        {cart.length === 0 ? (
          <p style={{ color: '#ccc' }}>El carrito está vacío</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((game, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <img src={game.thumbnail} alt={game.title} style={{ width: 40, height: 40, borderRadius: 8, marginRight: 8 }} />
                <span style={{ flex: 1 }}>{game.title} <span style={{ color: '#ee03ee' }}>{game.price === 'Gratis' ? 'Gratis' : `$${game.price}`}</span></span>
                <button style={{ background: '#ff00dd', color: '#fff', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={() => handleRemoveFromCart(idx)}>Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Buscador */}
      <input
        type="text"
        className="search-input"
        placeholder="Buscar videojuego por nombre o descripción..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 24 }}
      />

      <section className="cards-container">
        {filteredGames.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center' }}>No se encontraron videojuegos</p>
        ) : (
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onAddToCart={handleAddToCart} />
          ))
        )}
      </section>
    </div>
  );
};
 