import { Navbar } from "nextra-theme-docs";
import GradientText from "./GradientText";

const NavbarComponent = () => {
  return (
    <div className="border-b border-b-white/20 py-1 bg-neutral-950">
      <Navbar
        logo={
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={10}
            className="font-mona text-lg"
          >
            SlopScore.ai
          </GradientText>
        }
        // align="left" 
        className="page-px m-0 min-w-full bg-neutral-950"
        projectLink="https://github.com/Kshitijkumar16/slopScore.ai-docs"
      />
    </div>
  );
};

export default NavbarComponent;
