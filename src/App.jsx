import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Estado do carrinho
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} adicionado ao carrinho! 🎉`);
  };

  // Função para remover do carrinho
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="app">
      {/* Header com contador de itens */}
      <Header cartCount={cart.length} />
      
      {/* Seção Hero (Destaque) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>☀️ Sol & Sabor 🍹</h1>
          <p>Os drinks tropicais mais refrescantes do Brasil!</p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="container">
          {/* Lista de Produtos */}
          <ProductList addToCart={addToCart} />
          
          {/* Carrinho (Sidebar) - Só aparece se tiver itens */}
          {cart.length > 0 && (
            <div className="cart-sidebar">
              <h3>Seu Carrinho ({cart.length})</h3>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    {item.name} - R$ {item.price.toFixed(2)}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-button"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <button className="checkout-button">Finalizar Compra</button>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Receba nossas promoções!</h2>
          <form>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
            />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;                                        
