import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import ValueProps from '../components/home/ValueProps';
import ServicesPreview from '../components/home/ServicesPreview';
import ServiceArea from '../components/home/ServiceArea';
import EmploymentBanner from '../components/home/EmploymentBanner';
import ContactCTA from '../components/home/ContactCTA';
import Reveal from '../components/ui/Reveal';
import Seo from '../components/Seo';

export default function HomePage() {
  return (
    <div>
      <Seo
        title="KinDa Care: Compassionate Home Health Care in Texas"
        titleOverride
        description="KinDa Care Home Health provides compassionate, professional in-home care across Harris & Montgomery County, Texas. Our skilled nurses, therapists, and caregivers help your loved ones stay independent at home."
      />
      <Hero />
      <Reveal>
        <Welcome />
      </Reveal>
      <Reveal>
        <ValueProps />
      </Reveal>
      <Reveal>
        <ServicesPreview />
      </Reveal>
      <Reveal>
        <ServiceArea />
      </Reveal>
      <Reveal>
        <EmploymentBanner />
      </Reveal>
      <Reveal>
        <ContactCTA />
      </Reveal>
    </div>
  );
}
