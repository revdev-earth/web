import Image from "next/image";
import MerkabaIcon from "./Merkaba.svg";

const Header = () => (
  <header className="grid items-center lg:gap-6 xl:gap-10 mx-auto px-5 md:px-6 pt-6 pb-6 lg:px-12">
    <div className="flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left">
      <div className="flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12">
        <Image src={MerkabaIcon} alt="Merkaba icon" priority />
      </div>
      <h2 className="text-2xl">REV DEV</h2>
    </div>
  </header>
);

export default Header;
