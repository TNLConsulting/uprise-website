import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "#0D0D0D", color: "#F5F0E8" }}
    >
      <div className="mb-4 text-8xl font-black" style={{ color: "#D4920A" }}>
        404
      </div>
      <h1 className="text-3xl font-bold mb-4 uppercase tracking-widest">
        Pagina niet gevonden
      </h1>
      <p className="mb-8" style={{ color: "#A09080" }}>
        Deze pagina bestaat niet (meer).
      </p>
      <Link
        to="/"
        className="btn-amber inline-block rounded"
        style={{
          backgroundColor: "#D4920A",
          color: "#000",
          padding: "12px 32px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Terug naar home
      </Link>
    </div>
  );
};

export default NotFound;
