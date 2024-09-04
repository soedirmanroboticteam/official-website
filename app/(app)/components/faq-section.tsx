"use client"; //Client Side
import React from "react";
import SectionTitle from "@/components/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";
import { FrequentlyAskedQuestions } from "@/app/types/global.types";

const FaqSection = ({
  frequentlyAskedQuestions,
}: {
  frequentlyAskedQuestions: FrequentlyAskedQuestions[];
}) => {
  return (
    <Fade triggerOnce={true} fraction={0.5}>
      <section className="flex w-full px-4 md:px-10 py-20 flex-col justify-center items-start gap-12">
        <SectionTitle
          title="Frequently Asked Questions"
          desc="Still got questions? Check out our FAQ down here & contact us if still got any."
        />
        <Accordion type="multiple" className="w-full md:px-12">
          {frequentlyAskedQuestions.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.answer,
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Fade>
  );
};

export default FaqSection;
