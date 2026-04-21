import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import ServiceSections from '../components/ServiceSections';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactFooter from '../components/ContactFooter';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TrustBar />
      <ServiceSections />
      <WhyChooseUs />
      <ContactFooter />
    </>
  );
}
