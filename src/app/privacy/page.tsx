export const metadata = {
  title: 'Cookie Policy - Uprise',
  description: 'Lees ons cookie- en privacybeleid',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-[#2e2318] mb-8">Cookie Policy</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-[#3d3d3d]">
          {/* Intro */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2e2318] mb-4">
              Wat zijn cookies?
            </h2>
            <p className="mb-4">
              Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen. 
              Zij helpen websites beter te werken en geven inzicht in hoe bezoekers onze 
              site gebruiken.
            </p>
          </section>

          {/* Cookies we use */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2e2318] mb-4">
              Welke cookies gebruiken wij?
            </h2>

            <div className="space-y-6">
              {/* Google Analytics */}
              <div className="border-l-4 border-[#8b5a3c] pl-4">
                <h3 className="text-lg font-semibold text-[#2e2318] mb-2">
                  📊 Google Analytics
                </h3>
                <p className="mb-2">
                  <strong>Type:</strong> Analytische cookies
                </p>
                <p className="mb-2">
                  <strong>Wat doet het:</strong> Helpt ons begrijpen hoe bezoekers 
                  onze website gebruiken (welke pagina's populair zijn, waar je 
                  vandaan komt, etc.).
                </p>
                <p className="mb-2">
                  <strong>Duur:</strong> Tot 2 jaar
                </p>
                <p className="text-sm text-[#666]">
                  <strong>Meer info:</strong>{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b5a3c] hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>

              {/* Crisp Chat */}
              <div className="border-l-4 border-[#8b5a3c] pl-4">
                <h3 className="text-lg font-semibold text-[#2e2318] mb-2">
                  💬 Crisp Chat
                </h3>
                <p className="mb-2">
                  <strong>Type:</strong> Functionele cookies
                </p>
                <p className="mb-2">
                  <strong>Wat doet het:</strong> Maakt onze live chat widget mogelijk, 
                  zodat je ons kan contacteren via de chat op de website.
                </p>
                <p className="mb-2">
                  <strong>Duur:</strong> Session-based (tot je browser sluit)
                </p>
                <p className="text-sm text-[#666]">
                  <strong>Meer info:</strong>{' '}
                  <a
                    href="https://crisp.chat/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b5a3c] hover:underline"
                  >
                    Crisp Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Your rights */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2e2318] mb-4">
              Jouw rechten (GDPR)
            </h2>
            <p className="mb-4">
              Je hebt het recht om:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Cookie toestemming in te trekken op elk moment</li>
              <li>Meer informatie op te vragen over welke data we verzamelen</li>
              <li>Je gegevens te laten verwijderen (recht op vergetelheid)</li>
              <li>Je gegevens gedownload te krijgen in een draagbaar formaat</li>
            </ul>
          </section>

          {/* Manage preferences */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2e2318] mb-4">
              Cookie-instellingen wijzigen
            </h2>
            <p>
              Je kan je cookie-instellingen wijzigen via de banner onderaan onze website.
              Browser cookies verwijderen kan ook via je browser-instellingen.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2e2318] mb-4">
              Vragen?
            </h2>
            <p>
              Heb je vragen over ons cookie-beleid? Neem contact op via het 
              chat-widget op onze website of stuur ons een email.
            </p>
          </section>

          <div className="border-t pt-6 mt-6 text-sm text-[#999]">
            <p>Laatst bijgewerkt: maart 2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
