import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndObjectivesSection } from './components/AboutAndObjectivesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TechStackSection } from './components/TechStackSection';
import { ProductPreviewSection } from './components/ProductPreviewSection';
import { DownloadAndSourceSection } from './components/DownloadAndSourceSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutAndObjectivesSection />
        <FeaturesSection />
        <WorkflowSection />
        <TechStackSection />
        <ProductPreviewSection />
        <DownloadAndSourceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
