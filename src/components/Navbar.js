import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ display: 'flex', gap: '1rem', padding: '10px', background: '#eee' }}>
    <Link to="/counter">Counter</Link>
    <Link to="/clock">Clock</Link>
    <Link to="/form">Form</Link>
  </nav>
);

export default Navbar;
