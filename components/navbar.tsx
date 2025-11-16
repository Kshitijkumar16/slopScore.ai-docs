import { Navbar } from "nextra-theme-docs";
import GradientText from "./GradientText";

const NavbarComponent = () => {
  return (
    <div className="border-b fixed z-999 top-0 w-full border-b-white/20 py-1 bg-black">
      <Navbar
        logo={<p className="font-pixel text-white text-[24px]">Slopscore.ai</p>}
        // align="left"
        className="page-px m-0 min-w-full bg-black gap-x-6 flex items-center opacity-100"
        // projectLink="https://github.com/anishtilloo/mumbai-hacks-project-practice"
        chatIcon={
          <div className="bg-white rounded-md h-[30px] px-4 flex justify-center items-center">
            <p className="text-black font-mona text-sm font-medium">
              Try it out
            </p>
          </div>
        }
        chatLink="chat"
      />
    </div>
  );
};

export default NavbarComponent;
