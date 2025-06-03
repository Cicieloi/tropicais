import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #FF6B6B, #FF9E3F)',
      color: 'white',
      padding: '2rem 1rem',
      marginTop: '2rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Seção Contato */}
        <div>
          <h3 style={{ borderBottom: '2px solid white', paddingBottom: '0.5rem' }}>Contato</h3>
          <p><FaWhatsapp /> (11) 98765-4321</p>
          <p>✉️ sol&sabor@tropical.com</p>
        </div>

        {/* Seção Redes Sociais */}
        <div>
          <h3 style={{ borderBottom: '2px solid white', paddingBottom: '0.5rem' }}>Siga-nos</h3>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <a href="#" style={{ color: 'white' }}><FaInstagram /></a>
            <a href="#" style={{ color: 'white' }}>📘</a> {/* Ícone do Facebook */}
          </div>
          <p style={{ marginTop: '1rem' }}>#Sol&Sabor</p>
        </div>

        {/* Seção Localização */}
        <div>
          <h3 style={{ borderBottom: '2px solid white', paddingBottom: '0.5rem' }}>Onde estamos</h3>
          <p><FaMapMarkerAlt /> Av. Tropical, 123 - Praia do Sabor</p>
          <p>⏰ Aberto de 10h às 22h</p>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.3)'
      }}>
        <p>☀️ Sol & Sabor © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};



export default Footer;