const products = [
  { name: "Chrome Basin Faucet", price: "₹12,500" },
  { name: "Wall Mounted Basin", price: "₹18,900" },
  { name: "Rainfall Shower", price: "₹8,750" },
  { name: "Water Closet", price: "₹24,500" }
];

function Products() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Featured Products</h2>

      <div style={styles.grid}>
        {products.map((p, i) => (
          <div key={i} style={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }
};

export default Products;