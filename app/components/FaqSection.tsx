'use client' //Client Side
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { frequentQuestion } from "@/lib/frequentQuestions";
import { Fade } from "react-awesome-reveal";

const FaqSection = () => {
  return (
    <Fade triggerOnce={true} fraction={0.5}>
      <section className="flex w-full px-4 md:px-10 py-20 flex-col justify-center items-start gap-12">
        <SectionTitle
          title="Frequently Asked Questions"
          desc="Still have question about us? You might be able to find your answer here."
        />
        <Accordion type="multiple" className="w-full md:px-12">
          {frequentQuestion.map((question, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Fade>
  );
};

export default FaqSection;
