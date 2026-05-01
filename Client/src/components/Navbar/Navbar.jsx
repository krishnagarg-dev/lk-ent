import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LK Enterprises</h2>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Companies</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;