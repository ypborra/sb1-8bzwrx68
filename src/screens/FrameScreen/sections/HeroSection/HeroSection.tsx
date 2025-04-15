import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for statistics to enable mapping
const statistics = [
  {
    percentage: "0%",
    description:
      "Number of employees whose job is collecting and reporting status",
  },
  {
    percentage: "90%",
    description: "Reduction in manual oversight tasks",
  },
  {
    percentage: "100%",
    description:
      "Faster response with timely alerts on risks and recommendations",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16 font-['Plus_Jakarta_Sans',Helvetica]">
          Engauge AI saves up to 10+ hours per user/week
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-0 mb-16 w-full">
          {statistics.map((stat, index) => (
            <React.Fragment key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center p-6 w-[320px]">
                  <p className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-center">
                    <span className="text-[#014173] text-3xl">
                      {stat.percentage}
                    </span>
                    <span className="text-black"> </span>
                    <span className="text-black text-xl block mt-2">
                      {stat.description}
                    </span>
                  </p>
                </CardContent>
              </Card>

              {index < statistics.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[109px] my-auto"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <Button className="bg-[#014173] hover:bg-[#014173]/90 text-white font-medium px-10 py-4 rounded-[9px] font-['Plus_Jakarta_Sans',Helvetica]">
          Request Demo
        </Button>
      </div>
    </section>
  );
};
