import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { useLocalization } from './hooks/useLocalization';
import './App.css';

function App() {
  const [showNda, setShowNda] = useState(false);
  const { t } = useLocalization();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects onNdaClick={() => setShowNda(true)} />
        <Skills />
      </main>
      <Footer />

      {showNda && (
        <div className="nda-overlay" onClick={() => setShowNda(false)}>
          <div className="nda-modal" onClick={e => e.stopPropagation()}>
            <h2>{t.projects.links.ndaMessage}</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowNda(false)}
            >
              {t.projects.links.back}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
