import { useState } from "react";
import { MapPin, Mail, Facebook, Instagram, ArrowUp, Send } from "lucide-react";

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    vraag: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as a simple fallback
    const subject = encodeURIComponent("Contactformulier Uprise.be");
    const body = encodeURIComponent(
      `Voornaam: ${formData.voornaam}\nAchternaam: ${formData.achternaam}\nEmail: ${formData.email}\n\nVraag:\n${formData.vraag}`
    );
    window.open(`mailto:info@uprise.be?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(212,146,10,0.2)",
    color: "#F5F0E8",
    borderRadius: "0.375rem",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <footer id="contact" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Contact Section */}
      <div
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "rgba(212,146,10,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
                style={{ color: "#D4920A" }}
              >
                Contact
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8"
                style={{ color: "#F5F0E8" }}
              >
                Neem contact op
              </h2>
              <div
                className="w-12 h-1 mb-10 rounded-full"
                style={{ backgroundColor: "#D4920A" }}
              />

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(212,146,10,0.12)" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#D4920A" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#A09080" }}
                    >
                      Adres
                    </p>
                    <p className="text-sm" style={{ color: "#F5F0E8" }}>
                      Stationsstraat 96
                      <br />
                      3150 Haacht
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(212,146,10,0.12)" }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#D4920A" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#A09080" }}
                    >
                      E-mail
                    </p>
                    <a
                      href="mailto:info@uprise.be"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#F5F0E8" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#D4920A")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#F5F0E8")
                      }
                    >
                      info@uprise.be
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: "#A09080" }}
                    >
                      Volg ons
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.facebook.com/Uprise.be"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200"
                        style={{
                          border: "1px solid rgba(212,146,10,0.2)",
                          color: "#A09080",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "#D4920A";
                          el.style.color = "#D4920A";
                          el.style.backgroundColor = "rgba(212,146,10,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(212,146,10,0.2)";
                          el.style.color = "#A09080";
                          el.style.backgroundColor = "transparent";
                        }}
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/uprise.be/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200"
                        style={{
                          border: "1px solid rgba(212,146,10,0.2)",
                          color: "#A09080",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "#D4920A";
                          el.style.color = "#D4920A";
                          el.style.backgroundColor = "rgba(212,146,10,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(212,146,10,0.2)";
                          el.style.color = "#A09080";
                          el.style.backgroundColor = "transparent";
                        }}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div
                className="rounded-lg p-8"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.15)",
                }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: "rgba(212,146,10,0.15)" }}
                    >
                      <Send className="w-8 h-8" style={{ color: "#D4920A" }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#F5F0E8" }}
                    >
                      Bedankt!
                    </h3>
                    <p className="text-sm" style={{ color: "#A09080" }}>
                      Je bericht is onderweg. We contacteren je zo snel mogelijk.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-bold tracking-widest uppercase mb-2"
                          style={{ color: "#A09080" }}
                          htmlFor="voornaam"
                        >
                          Voornaam
                        </label>
                        <input
                          id="voornaam"
                          name="voornaam"
                          type="text"
                          required
                          value={formData.voornaam}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            ((e.target as HTMLElement).style.borderColor =
                              "rgba(212,146,10,0.6)")
                          }
                          onBlur={(e) =>
                            ((e.target as HTMLElement).style.borderColor =
                              "rgba(212,146,10,0.2)")
                          }
                          placeholder="Jan"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-bold tracking-widest uppercase mb-2"
                          style={{ color: "#A09080" }}
                          htmlFor="achternaam"
                        >
                          Achternaam
                        </label>
                        <input
                          id="achternaam"
                          name="achternaam"
                          type="text"
                          required
                          value={formData.achternaam}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            ((e.target as HTMLElement).style.borderColor =
                              "rgba(212,146,10,0.6)")
                          }
                          onBlur={(e) =>
                            ((e.target as HTMLElement).style.borderColor =
                              "rgba(212,146,10,0.2)")
                          }
                          placeholder="Janssen"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#A09080" }}
                        htmlFor="email"
                      >
                        E-mailadres
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(212,146,10,0.6)")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(212,146,10,0.2)")
                        }
                        placeholder="jan@voorbeeld.be"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#A09080" }}
                        htmlFor="vraag"
                      >
                        Jouw vraag
                      </label>
                      <textarea
                        id="vraag"
                        name="vraag"
                        rows={5}
                        required
                        value={formData.vraag}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical" }}
                        onFocus={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(212,146,10,0.6)")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderColor =
                            "rgba(212,146,10,0.2)")
                        }
                        placeholder="Schrijf hier je vraag of opmerking..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-sm font-black tracking-[0.2em] uppercase rounded transition-all duration-300 flex items-center justify-center gap-3"
                      style={{ backgroundColor: "#D4920A", color: "#000" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.backgroundColor =
                          "#E8A020")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.backgroundColor =
                          "#D4920A")
                      }
                    >
                      <Send className="w-4 h-4" />
                      Versturen
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t py-8"
        style={{ borderColor: "rgba(212,146,10,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 flex items-center justify-center rounded"
                style={{ backgroundColor: "#D4920A" }}
              >
                <ArrowUp className="w-4 h-4 text-black" strokeWidth={3} />
              </div>
              <span
                className="text-sm font-black tracking-widest uppercase"
                style={{ color: "#F5F0E8" }}
              >
                UPRISE
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs" style={{ color: "#A09080" }}>
              © 2025 Uprise. Alle rechten voorbehouden.
            </p>

            {/* Quick links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/Uprise.be"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-200"
                style={{ color: "#A09080" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#D4920A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#A09080")
                }
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/uprise.be/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200"
                style={{ color: "#A09080" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#D4920A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#A09080")
                }
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
