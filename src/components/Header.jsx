export default function Header({ cartCount }) {
  return (
    <header>
      <h1>☀️ Sol & Sabor 🍹</h1>
      <nav>
        <span>O verão no seu copo 
          </span><br /><span>🍹🛒 ({cartCount})</span>
      </nav>
    </header>
  );
}
