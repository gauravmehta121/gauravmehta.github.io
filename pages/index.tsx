import { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Education = dynamic(() => import('@/components/Education'), { ssr: false });
const Work = dynamic(() => import('@/components/Work'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;