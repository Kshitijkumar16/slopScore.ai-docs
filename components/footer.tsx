import React from "react";
import GradientText from "./GradientText";
import { Github, Instagram, Twitter, X } from "lucide-react";

const FooterComponent = () => {
  return (
    <div className="bg-black border-t selection:text-black selection:bg-arancia border-t-white/20 pt-8 page-px overflow-hidden">
      <div className="flex justify-between w-full">
        <div>
          <p className="font-pixel text-white text-[24px]">SlopScore.ai</p>
        </div>
        <div className="translate-y-2.5">
          <p className="text-white text-sm">Resources</p>
          <p className="text-white/50 text-sm">Link 1</p>
          <p className="text-white/50 text-sm">Link 2</p>
          <p className="text-white/50 text-sm">Link 3</p>
          <p className="text-white/50 text-sm">Link 4</p>
        </div>
        <div className="translate-y-2.5">
          <p className="text-white text-sm">More</p>
          <p className="text-white/50 text-sm">Link 1</p>
          <p className="text-white/50 text-sm">Link 2</p>
          <p className="text-white/50 text-sm">Link 3</p>
        </div>
        <div className="translate-y-2.5">
          <p className="text-white text-sm">About us</p>
          <p className="text-white/50 text-sm">Link 1</p>
          <p className="text-white/50 text-sm">Link 2</p>
        </div>
        <div className="translate-y-2.5">
          <p className="text-white text-sm">Legal</p>
          <p className="text-white/50 text-sm">Privacy Policy</p>
        </div>

        <div className="translate-y-2.5 w-60">
          <p className="text-white text-sm">Stay in the loop</p>
          <p className="text-white/50 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>

      <div className="py-10 flex justify-between">
        <div className="">
          <p className="text-white/50 text-sm tracking-wide">
            &copy;2025 SlopScore.ai
          </p>
          <div className="flex items-center -translate-y-2 gap-x-2 h-5">
            <Github className="text-black fill-black border bg-white rounded-full p-0.5 opacity-50 size-[19px]" />
            <div className="w-px h-full bg-white/30"></div>
            <Instagram className="size-4.5 text-white opacity-50" />
          </div>
        </div>
        <div className="">
          <p className="text-white/50 text-sm tracking-wide">
            Keeping humanity safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
