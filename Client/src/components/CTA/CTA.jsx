function CTA() {
  return (
    <section style={styles.cta}>
      <h2>Need Expert Consultation?</h2>
      <p>Our team is ready to help you choose the perfect products.</p>
      <button>Contact Us Today →</button>
    </section>
  );
}

const styles = {
  cta: {
    textAlign: "center",
    padding: "60px",
    background: "#2563eb",
    color: "#fff"
  }
};

export default CTA;