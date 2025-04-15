import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const AssignMonitorSteerSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Product", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <section className="w-full relative py-px">
      <div className="flex flex-col w-full">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-20 py-6 w-full">
          {/* Logo */}
          <div className="flex items-center h-[54px]">
            <img
              className="w-12 h-[54px] object-cover"
              alt="Dalle engauge"
              src="./dalle-engauge-logo2.png"
            />
            <div className="ml-[10px]">
              <h1 className="font-['Bebas-Regular',Helvetica] text-[43.8px] leading-[36.3px] tracking-[-0.44px]">
                <span className="text-black tracking-[-0.19px]">ENGAUGE</span>
                <span className="text-[#014374] tracking-[-0.19px]">AI</span>
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-[33px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="inline-flex items-center justify-center px-6 py-2 font-normal text-base text-[#121830] leading-8"
                    href={item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button className="bg-[#014173] text-white rounded-[9px] px-[45px] py-[9px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[16.9px] leading-9">
            Request Demo
          </Button>
        </header>

        {/* Hero Section */}
        <div className="flex mt-[102px] mb-[100px]">
          {/* Left Content */}
          <div className="w-[901px] pl-[110px] flex flex-col">
            <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-[56px] leading-[normal]">
              <span className="text-[#014173]">The Chief-of-Staff</span>
              <br />
              <span className="text-black">powering 10X Managers</span>
            </h2>

            <p className="mt-10 font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-[#014173] text-xl leading-[normal]">
              Your analyst, agent, and coach in one powerful app, <br />
              designed to help you lead smarter, not harder.
            </p>

            <div className="flex gap-6 mt-[77px]">
              <Button
                variant="outline"
                className="w-[184px] h-[54px] border-[#121830] rounded-[9px] font-['Inter',Helvetica] font-medium text-[16.9px] text-[#121830] leading-9"
              >
                Discover Features
              </Button>

              <Button className="w-[184px] h-[54px] bg-[#014173] rounded-[9px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[16.9px] text-white leading-9">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="w-[1008px] h-[716px] bg-[#037cbf33] rounded-[48px] flex items-center justify-center">
            <div className="flex flex-col w-[599px] items-center gap-7">
              <img
                className="w-[183px] h-[183px]"
                alt="Hero visual placeholder"
                src="./image-03.svg"
              />

              <p className="text-center font-['Inter',Helvetica] text-2xl">
                <span className="font-bold text-[#121830]">
                  Hero visual
                  <br />
                  <br />
                </span>
                <span className="text-[#121830]">
                  An image, an animation, or a video to demonstrate the
                  product's{" "}
                </span>
                <span className="font-medium text-[#5f1cfc]">
                  main capability
                </span>
                <span className="text-[#121830]">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};