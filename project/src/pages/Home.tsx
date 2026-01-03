import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Approach from '../components/Approach';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Services />
      <WhyUs />
      <HowItWorks />
      <SocialProof />
      <CTA />
    </>
  );
}
