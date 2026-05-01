function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <h3>LK Enterprises</h3>
        <p>Premium sanitary solutions provider.</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>Products</p>
      </div>

      <div>
        <h4>Contact</h4>
        <p>+91 XXXXX XXXXX</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    background: "#f5f5f5"
  }
};

export default Footer;