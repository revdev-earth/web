'use client';
import Footer from './Footer';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

import Fade from 'react-reveal/Fade';

const La = () => (
  <>
    <Header />
    <Section1 />

    <Fade>
      <Section2 />
    </Fade>
    <Fade>
      <Section3 />
    </Fade>
    <Fade>
      <Section4 />
    </Fade>
    <Fade>
      <Section5 />
    </Fade>
    <Fade>
      <Section6 />
    </Fade>
    <Fade>
      <Section7 />
    </Fade>
    <Fade>
      <Footer />
    </Fade>
  </>
);

export default La;
