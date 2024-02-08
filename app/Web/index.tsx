import Footer from "./Footer";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

import FadeInOut from "./FadeInOut";

const La = () => (
  <>
    <Header />
    <Section1 />
    <FadeInOut component={<Section2 />} />
    <FadeInOut component={<Section3 />} />
    <FadeInOut component={<Section4 />} />
    <FadeInOut component={<Section5 />} />
    <FadeInOut component={<Section6 />} />
    <FadeInOut component={<Section7 />} />
    <FadeInOut component={<Footer />} />
    {/* <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Footer /> */}
  </>
);

export default La;
