import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Team member data for mapping
const teamMembers = [
  {
    name: "Yamini Borra",
    role: "Founder, CEO",
    image: "./third-persons.png",
  },
  {
    name: "Ashok Bala",
    role: "DevOps & Integrations Lead",
    image: "./image--1--1.png",
    hasSocialIcon: true,
  },
  {
    name: "Sumita Jaiprakash",
    role: "Engineering Leader - AI",
    image: "./whatsapp-image-2025-03-19-at-12-53-42--1--1.png",
  },
  {
    name: "Ashish Sharma",
    role: "AI & ML Engineer",
    image: "./screenshot-2025-03-21-at-11-35-00-am-2.png",
  },
];

// Advisor data for mapping
const advisors = [
  {
    name: "David Ragones",
    role: "SVP of Product, Amplitude\nFormer SVP at Salesforce, Success factors",
    image: "./screenshot-2025-03-21-at-11-08-40-am-1.png",
    hasSocialIcon: true,
  },
  {
    name: "Paul Coffrey",
    role: "VP Application Engineering,\nSAP Success Factors",
    image: "./screenshot-2025-03-21-at-11-09-48-am-1.png",
    hasSocialIcon: true,
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        {/* Team Section */}
        <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#2b2a34] text-5xl text-center mb-16">
          Meet Our Team &amp; Trusted Advisors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-[#f8f7f7] rounded-[42px] border border-solid border-[#ebe8f1] shadow-[inset_0px_0px_0px_2px_#e3deef] overflow-hidden"
            >
              <CardContent className="flex flex-col items-center pt-12 pb-8 px-4">
                <div className="w-[178px] h-[178px] mb-12 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#282876] text-[22px] text-center leading-7 mb-6">
                  {member.name}
                </h3>

                <p className="font-['Inter',Helvetica] font-normal text-[#8181ac] text-[22px] text-center leading-6 whitespace-pre-line">
                  {member.role}
                </p>

                {member.hasSocialIcon && (
                  <div className="mt-8">
                    <img
                      className="w-[33px] h-[31px]"
                      alt="Social icons"
                      src="./social-icons.svg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisors Section */}
        <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#2b2a34] text-5xl text-center mb-16">
          Our Trusted Advisors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {advisors.map((advisor, index) => (
            <Card
              key={index}
              className="bg-[#f8f7f7] rounded-[42px] border border-solid border-[#ebe8f1] shadow-[inset_0px_0px_0px_2px_#e3deef] overflow-hidden"
            >
              <CardContent className="flex flex-col items-center pt-8 pb-8 px-4">
                <div className="w-[178px] h-[178px] mb-8 rounded-full overflow-hidden">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#282876] text-[22px] text-center leading-7 mb-6">
                  {advisor.name}
                </h3>

                <p className="font-['Inter',Helvetica] font-normal text-[#8181ac] text-[22px] text-center leading-6 whitespace-pre-line">
                  {advisor.role}
                </p>

                {advisor.hasSocialIcon && (
                  <div className="mt-8">
                    <img
                      className="w-[33px] h-[31px]"
                      alt="Social icons"
                      src="./social-icons.svg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};