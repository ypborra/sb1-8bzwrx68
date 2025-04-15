import React from "react";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const TrustedAdvisorsSection = (): JSX.Element => {
  // Data for the tabs
  const tabOptions = [
    { id: "assign", label: "Assign, Monitor & Steer Work", active: true },
    { id: "coach", label: "Coach, Develop, Manage", active: false },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left content area */}
          <div className="flex flex-col w-full lg:w-1/2 space-y-12 pr-4">
            {/* Tabs navigation */}
            <Tabs defaultValue="assign" className="w-full">
              <TabsList className="w-full flex justify-start gap-4 bg-transparent p-0">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`px-[45px] py-[9px] rounded-[15px] text-[16.9px] leading-9 font-semibold ${
                      tab.active
                        ? "bg-[#e2e3fb] text-[#333ced] border border-solid border-[#333ced]"
                        : "bg-[#f8f7f7] text-[#868686]"
                    }`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Content area */}
            <div className="flex flex-col space-y-12 pt-8">
              <h2 className="font-semibold text-[#014173] text-[56px] font-['Plus_Jakarta_Sans',Helvetica]">
                Assign, Monitor &amp; Steer Work
              </h2>

              <p className="font-semibold text-[#014173] text-xl font-['Plus_Jakarta_Sans',Helvetica]">
                Reinforce strong team standards and practices effortlessly.
                Track performance and automate reporting to ensure nothing slips
                through the cracks.
              </p>

              <Button className="w-fit bg-[#014173] rounded-[9px] px-[45px] py-[9px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[16.9px]">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right image area */}
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto object-cover"
              alt="Engauge AI"
              src="./engauge-ai-2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};