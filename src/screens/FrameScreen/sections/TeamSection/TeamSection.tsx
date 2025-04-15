import { CheckSquareIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for each card
const featureCards = [
  {
    title: "Continuous\nObservability",
    sections: [
      {
        heading: "Co-pilot for Team Management",
        items: ["Identify Risks", "Automated Root Cause Analysis"],
      },
      {
        heading: "Proactive Planning",
        items: ["Prevent Issues", "Enable Early Action"],
      },
    ],
  },
  {
    title: "Change\nAgent",
    sections: [
      {
        heading: "Tailored Action Items",
        items: ["Empower Teams", "Prioritize Needs"],
      },
      {
        heading: "Strategic Decision Making",
        items: ["Evaluate Tradeoffs", "Explore Alternatives"],
      },
    ],
  },
  {
    title: "Seamless\nAlignment",
    sections: [
      {
        heading: "Communication Streamlining",
        items: ["Automated communication drafts"],
      },
      {
        heading: "Progress Tracking",
        items: ["Reminder Alerts", "Improvement Plans"],
      },
    ],
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h2 className="font-semibold text-4xl text-[#014173] text-center font-['Plus_Jakarta_Sans',Helvetica]">
          AI + Manager
        </h2>
        <p className="font-normal text-2xl text-black text-center font-['Inter',Helvetica]">
          Scale your impact, empower your teams and lead with confidence
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-[501px] bg-[#037cbf33] rounded-[48px] border-none"
          >
            <CardContent className="flex flex-col items-start gap-1.5 px-0 py-[72px]">
              <div className="flex h-24 items-center pl-[30px] pr-[69px] w-full">
                <h3 className="w-[420px] ml-[-9px] mr-[-9px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#014173] text-[32px] tracking-[1.60px] leading-[48px] whitespace-pre-line">
                  {card.title}
                </h3>
              </div>

              {card.sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <div className="flex h-24 items-center pl-[30px] pr-[69px] w-full">
                    <h4 className="w-[420px] ml-[-9px] mr-[-9px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-2xl tracking-[1.20px] leading-[48px]">
                      {section.heading}
                    </h4>
                  </div>

                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-[14.6px] px-[30px] py-0 w-full"
                    >
                      <CheckSquareIcon className="w-[19.47px] h-[19.47px]" />
                      <span className="mt-[-0.54px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-black text-[22px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
