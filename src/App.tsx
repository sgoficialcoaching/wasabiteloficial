import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import MobilePlans from './components/MobilePlans';
import FiberPlans from './components/FiberPlans';
import PremiumServices from './components/PremiumServices';
import SecurityServices from './components/SecurityServices';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import AlarmForm from './components/AlarmForm';
import CallRequestForm from './components/CallRequestForm';
import LegalNotice from './components/LegalNotice';
import CookiePolicy from './components/CookiePolicy';
import CookiePopup from './components/CookiePopup';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [showAlarmForm, setShowAlarmForm] = useState(false);
  const [showCallRequestForm, setShowCallRequestForm] = useState(false);
  const [showLegalNotice, setShowLegalNotice] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openContactForm = (service = '') => {
    setSelectedService(service);
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setSelectedService('');
  };

  const openAlarmForm = () => {
    setShowAlarmForm(true);
  };

  const closeAlarmForm = () => {
    setShowAlarmForm(false);
  };

  const openCallRequestForm = () => {
    setShowCallRequestForm(true);
  };

  const closeCallRequestForm = () => {
    setShowCallRequestForm(false);
  };

  // Handle policy navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/politica-privacidad') {
        setShowPrivacyPolicy(true);
      } else if (path === '/terminos-condiciones') {
        setShowTermsConditions(true);
      } else if (path === '/aviso-legal') {
        setShowLegalNotice(true);
      } else if (path === '/cookies') {
        setShowCookiePolicy(true);
      } else {
        setShowPrivacyPolicy(false);
        setShowTermsConditions(false);
        setShowLegalNotice(false);
        setShowCookiePolicy(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check initial URL

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={() => {
      setShowPrivacyPolicy(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showTermsConditions) {
    return <TermsConditions onBack={() => {
      setShowTermsConditions(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showLegalNotice) {
    return <LegalNotice onBack={() => {
      setShowLegalNotice(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showCookiePolicy) {
    return <CookiePolicy onBack={() => {
      setShowCookiePolicy(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={openContactForm} />
      <Hero onContactClick={openContactForm} />
      <Stats />
      <WhyChoose />
      <MobilePlans onContactClick={openContactForm} />
      <FiberPlans onContactClick={openContactForm} />
      <PremiumServices onContactClick={openContactForm} />
      <SecurityServices onContactClick={openContactForm} onAlarmClick={openAlarmForm} />
      <Footer onCallRequestClick={openCallRequestForm} />
      
      <CookiePopup />
      
      <ContactForm 
        isOpen={showContactForm}
        onClose={closeContactForm}
        selectedService={selectedService}
      />
      
      <AlarmForm 
        isOpen={showAlarmForm}
        onClose={closeAlarmForm}
      />
      
      <CallRequestForm 
        isOpen={showCallRequestForm}
        onClose={closeCallRequestForm}
      />
    </div>
  );
}

export default App;