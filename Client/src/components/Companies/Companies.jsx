const companies = [
  { name: "Cera" },
  { name: "Jaquar" },
  { name: "Hindware" },
  { name: "Grohe" }
];

function Companies() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Our Partner Brands</h2>

      <div style={styles.grid}>
        {companies.map((c, i) => (
          <div key={i} style={styles.card}>
            <h3>{c.name}</h3>
            <p>Premium sanitary solutions</p>
            <button>View Products →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }
};

export default Companies;