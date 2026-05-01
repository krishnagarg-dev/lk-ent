function WhatsApp() {
  const phone = "91XXXXXXXXXX";

  const url = `https://wa.me/${phone}`;

  return (
    <a href={url} target="_blank" style={styles.btn}>
      💬
    </a>
  );
}

const styles = {
  btn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    color: "#fff",
    padding: "15px",
    borderRadius: "50%"
  }
};

export default WhatsApp;