import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Academy from './pages/Academy';
import IndustriesOverview from './pages/IndustriesOverview';
import IndustryRestaurants from './pages/IndustryRestaurants';
import IndustryMedicalClinics from './pages/IndustryMedicalClinics';
import IndustryHospitality from './pages/IndustryHospitality';
import IndustryEcommerce from './pages/IndustryEcommerce';
import Book from './pages/Book';
import ServiceWebsites from './pages/ServiceWebsites';
import ServiceProcessAutomation from './pages/ServiceProcessAutomation';
import ServiceVoiceAI from './pages/ServiceVoiceAI';
import ServiceChatbots from './pages/ServiceChatbots';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/zasoby" element={<Resources />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/akademia" element={<Academy />} />
              <Route path="/book" element={<Book />} />
              <Route path="/umow" element={<Book />} />
              <Route path="/industries" element={<IndustriesOverview />} />
              <Route path="/industries/restaurants" element={<IndustryRestaurants />} />
              <Route path="/industries/medical-clinics" element={<IndustryMedicalClinics />} />
              <Route path="/industries/hospitality" element={<IndustryHospitality />} />
              <Route path="/industries/ecommerce" element={<IndustryEcommerce />} />
              <Route path="/services/websites" element={<ServiceWebsites />} />
              <Route path="/uslugi/websites" element={<ServiceWebsites />} />
              <Route path="/services/process-automation" element={<ServiceProcessAutomation />} />
              <Route path="/uslugi/process-automation" element={<ServiceProcessAutomation />} />
              <Route path="/services/voice-ai" element={<ServiceVoiceAI />} />
              <Route path="/uslugi/voice-ai" element={<ServiceVoiceAI />} />
              <Route path="/services/chatbots" element={<ServiceChatbots />} />
              <Route path="/uslugi/chatbots" element={<ServiceChatbots />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
