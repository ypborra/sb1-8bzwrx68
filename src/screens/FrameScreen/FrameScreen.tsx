import React from "react";
import { AssignMonitorSteerSection } from "./sections/AssignMonitorSteerSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { TeamSection } from "./sections/TeamSection";
import { TrustedAdvisorsSection } from "./sections/TrustedAdvisorsSection";

export const FrameScreen = (): JSX.Element => {
  // Team member data
  const teamMember = {
    name: "Snigdha Srivastava",
    role: "Product Manager",
    image: "./screenshot-2025-03-05-at-8-34-40-pm-1.png",
  };

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Main content sections in the order shown in the image */}
        <AssignMonitorSteerSection />
        <CallToActionSection />
        <TrustedAdvisorsSection />
        <HeroSection />
        <TeamSection />
        <FeaturesSection />

        {/* This content seems to be part of a section but is directly in the main component.
            It should probably be moved to the appropriate section component. */}
        <div className="hidden">
          <div className="w-[184px] h-[97px] mt-4">
            <div className="w-[133px] h-14 mx-auto [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#282876] text-[22px] text-center tracking-[0] leading-7">
              {teamMember.name}
            </div>
            <div className="h-6 mt-3 [font-family:'Inter',Helvetica] font-normal text-[#8181ac] text-[22px] tracking-[0] leading-6 whitespace-nowrap">
              {teamMember.role}
            </div>
          </div>
          <img
            className="w-[178px] h-[178px]"
            alt="Team member"
            src={teamMember.image}
          />
          <img
            className="h-[31px] w-[33px]"
            alt="Social icons"
            src="./social-icons.svg"
          />
        </div>
      </div>
    </div>
  );
};