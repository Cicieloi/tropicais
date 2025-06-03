const products = [
  {
    id: 1,
    name: "Piña Colada",
    price: 24.90,
    description: "Rum, abacaxi e leite de coco cremoso",
    color: "#FFD700",
    image: "/img/pina.avif"
    
  },
  {
    id: 2,
    name: "Mojito Tropical",
    price: 22.50,
    description: "Rum, hortelã fresca e limão siciliano",
    color: "#4CAF50",
    image: "/img/pina-colada.jpg"
  },
  {
    id: 3,
    name: "Sunset Paradise",
    price: 26.00,
    description: "Vodka, suco de laranja e grenadine",
    color: "#FF6B6B",
    image: "/img/pina-colada.jpg"
  },
    {
    id: 4,
    name: "Manga Sunrise",
    price: 23.90,
    description: "Cachaça, manga e gengibre",
    color: "#FFA500",
    image: "/img/pina-colada.jpg"
  },
  {
    id: 5,
    name: "Coco Beach",
    price: 25.50,
    description: "Vodka, água de coco e limão",
    color: "#8B4513",
    image: "/img/pina-colada.jpg"
  },
  {
    id: 6,
    name: "Maracujá Explosion",
    price: 24.00,
    description: "Rum, maracujá e pimenta rosa",
    color: "#FFD700",
    image: "/img/pina-colada.jpg"
  },
  {
    id: 7,
    name: "Kiwi Breeze",
    price: 26.90,
    description: "Gin, kiwi e menta",
    color: "#9ACD32",
    image: "/img/pina-colada.jpg"
  },
  {
    id: 8,
    name: "Purple Rain",
    price: 27.50,
    description: "Tequila, blue curaçao e groselha",
    color: "#9370DB"
  }
];

export default function ProductList({ addToCart }) {
  return (
    <section className="product-grid">
      {products.map(product => (
        <div 
          key={product.id} 
          className="product-card" 
          style={{ borderTop: `5px solid ${product.color}` }}
        >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="price">R$ {product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="buy-button"
          >
            🛒 Adicionar
          </button>
        </div>
      ))}
    </section>
  );
}
