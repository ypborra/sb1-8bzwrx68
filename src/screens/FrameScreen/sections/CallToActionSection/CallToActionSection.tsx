import { CheckSquareIcon, XIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Data for "Without Engauge AI" card
  const withoutEngaugeItems = [
    {
      title: "Ineffective Coaching:",
      description: [
        "Managers struggle to",
        "provide timely feedback, make proactive changes",
        "to assignments, or support their new hires and team",
      ],
    },
    {
      title: "Manual Oversight",
      description: [
        ": Tracking progress,",
        "prioritizing tasks, and managing dependencies",
      ],
    },
    {
      title: "Limited Visibility:",
      description: [
        " Stakeholder questions,",
        "communication gaps, and unclear progress and",
        " slow decision-making",
      ],
    },
    {
      title: "Lack of Alignment:",
      description: [
        " Goals and Success metrics are",
        " not frequently reviewed and reinforced",
      ],
    },
  ];

  // Data for "With Engauge AI" card
  const withEngaugeItems = [
    {
      title: "Smarter Coaching",
      description: [
        ": Collect feedback,",
        "analyze sentiment, and proactively coach",
        "employees while reducing bias",
      ],
    },
    {
      title: "Effortless Oversight:",
      description: [
        " Automate status tracking,",
        "detect risks early and perform root cause analysis",
      ],
    },
    {
      title: "Real-Time Visibility:",
      description: [
        "",
        "Easily monitor individual and team performance,",
        " track changes, and communicate effectively",
      ],
    },
    {
      title: "Clear Alignment",
      description: [
        ": Draft communications,",
        "check alignment, and influence stakeholders",
      ],
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h2 className="w-full max-w-[1476px] font-semibold text-4xl text-center font-['Plus_Jakarta_Sans',Helvetica]">
          Engauge AI helps you respond faster to risks, improve team
          performance, and free up time for strategic work.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Without Engauge AI Card */}
        <Card className="flex flex-col w-[627px] h-[849px] items-start gap-[29px] py-[72px] bg-[#f8f7f7] rounded-[48px] border-none">
          <CardContent className="flex flex-col w-full h-full p-0">
            <div className="flex h-24 items-center justify-between pl-[30px] pr-[69px] relative w-full">
              <div className="relative w-[420px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[32px] tracking-[1.60px] leading-[48px]">
                Without
                <br />
                Engauge AI
              </div>

              <div className="flex items-center justify-center px-[45px] py-[9px] bg-white rounded-[9px] border border-solid border-[#f8f7f7]">
                <div className="font-bold text-[#121830] text-xl relative w-fit font-['Inter',Helvetica] leading-9 whitespace-nowrap">
                  The old way
                </div>
              </div>
            </div>

            <div className="h-24 w-full" />

            {withoutEngaugeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-[31px] px-[30px] py-0 w-full mb-6"
              >
                <XIcon className="w-6 h-6 mt-1 text-black" />
                <div className="flex flex-col items-start gap-[8.65px]">
                  {item.description.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="font-['Plus_Jakarta_Sans',Helvetica] text-black text-[22px]"
                    >
                      {lineIndex === 0 ? (
                        <>
                          <span className="font-bold">{item.title}</span>
                          <span className="font-medium">{line}</span>
                        </>
                      ) : (
                        <span className="font-medium">{line}</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* With Engauge AI Card */}
        <Card className="flex flex-col w-[627px] h-[849px] items-start gap-[29px] py-[72px] bg-[#037cbf33] rounded-[48px] border-none">
          <CardContent className="flex flex-col w-full h-full p-0">
            <div className="flex h-24 items-center justify-between pl-[30px] pr-[69px] relative w-full">
              <div className="relative w-[420px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[32px] tracking-[1.60px] leading-[48px]">
                <span className="text-black tracking-[0.51px]">With{"  "}</span>
                <span className="text-[#014173] tracking-[0.51px]">
                  Engauge AI
                </span>
              </div>

              <div className="flex items-center justify-center px-[45px] py-[9px] bg-white rounded-[9px] border border-solid border-[#f8f7f7]">
                <div className="font-bold text-[#014173] text-xl relative w-fit font-['Inter',Helvetica] leading-9 whitespace-nowrap">
                  The new way
                </div>
              </div>
            </div>

            <div className="h-24 w-full" />

            {withEngaugeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-[31px] px-[30px] py-0 w-full mb-6"
              >
                <CheckSquareIcon className="w-[47px] h-[50px] text-[#014173]" />
                <div className="flex flex-col items-start gap-[8.65px]">
                  {item.description.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="font-['Plus_Jakarta_Sans',Helvetica] text-black text-[22px]"
                    >
                      {lineIndex === 0 ? (
                        <>
                          <span className="font-bold">{item.title}</span>
                          <span className="font-medium">{line}</span>
                        </>
                      ) : (
                        <span className="font-medium">{line}</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
