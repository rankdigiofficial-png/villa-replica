const Nutrilaben = () => {
  const ctaLink = "https://ux02w.doctormedved.com/l";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <section style={{ backgroundColor: "#87CEEB", padding: "20px 0", textAlign: "center" }}>
        <img
          src="https://bestdealszone.top/wp-content/uploads/2026/02/2.png"
          alt="Nutrilaben Header"
          style={{ maxWidth: "636px", width: "100%", height: "auto" }}
        />
      </section>

      {/* Main Content Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #4FC3F7 0%, #81D4FA 50%, #B3E5FC 100%)",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://bestdealszone.top/wp-content/uploads/2026/02/0-1000x1024.png"
            alt="Nutrilaben Product"
            style={{ maxWidth: "600px", width: "100%", height: "auto", margin: "0 auto" }}
          />
        </a>

        <div style={{ marginTop: "30px" }}>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#FFD600",
              color: "#000",
              fontSize: "clamp(18px, 3vw, 28px)",
              fontWeight: 700,
              padding: "20px 50px",
              borderRadius: "8px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            ODBIERZ ZNIŻKĘ -100% TERAZ
          </a>
        </div>

        <div style={{ marginTop: "30px" }}>
          <img
            src="https://bestdealszone.top/wp-content/uploads/2026/02/6.png"
            alt="Payment and Quality Guarantee"
            style={{ maxWidth: "424px", width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Footer */}
      <section style={{ padding: "20px", textAlign: "center", backgroundColor: "#fff" }}>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#333",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          POLITYKA PRYWATNOŚCI
        </a>
      </section>
    </div>
  );
};

export default Nutrilaben;
