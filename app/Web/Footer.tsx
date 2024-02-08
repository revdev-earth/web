import Image from "next/image";
import MerkabaIcon from "./Merkaba.svg";

const Footer = () => (
  <footer className="container mx-auto px-5 md:px-6 pt-16 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
    <div className="flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left">
      <div className="flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12">
        <Image src={MerkabaIcon} alt="Merkaba icon" priority />
      </div>
      <h2 className="text-2xl">REV DEV</h2>
    </div>
  </footer>
);

export default Footer;
