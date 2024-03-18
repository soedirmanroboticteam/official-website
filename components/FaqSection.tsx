import React from "react";
import SectionTitle from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { frequentQuestion } from "@/lib/frequentQuestions";

const FaqSection = () => {
  return (
    <section className="flex w-full px-10 py-20 flex-col justify-center items-start gap-12">
      <SectionTitle
        title="Frequently Asked Questions"
        desc="Still have question about us? You might be able to find your answer here."
      />
      <Accordion type="multiple" className="w-full px-12">
        {frequentQuestion.map((question, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>
              <p className="">{question.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
