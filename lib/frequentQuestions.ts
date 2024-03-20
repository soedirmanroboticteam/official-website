import React from "react";

export const frequentQuestion: {
  question: string;
  answer: React.JSX.Element;
}[] = [
  {
    question: "Is it possible to make a partnership?",
    answer: React.createElement(
      "p",
      { className: "" },
      "Absolutely, we are open for a lot of parnership options and for further information about this. You can contact us via Email at ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "mailto:soedirmanrobotic@gmail.com",
        },
        "soedirmanrobotic@gmail.com"
      ),
      " or via WhatsApp to our Person In Charge at ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "https://wa.me/6281229947468",
        },
        "081229947468 (Fida)"
      ),
      " for media partnership and ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "https://wa.me/6281295234031",
        },
        "081295234031 (Tsania)"
      ),
      " if you're interested to support us as one of our sponsors."
    ),
  },
  {
    question:
      "Do you have any program, booth, or maybe we can visit your organization?",
    answer: React.createElement(
      "p",
      { className: "" },
      "We do have some programs to reach external parties. Such as Open House, S3 Expo, Pengabdian Pengurus, and external visitations. If you're a student of Jenderal Soedirman University, you can come join us at the Open House and S3 Expo. As for the Organization, School, and other parties outside of Jenderal Soedirman University, we do have some partnership for Pengabdian Pengurus and external visitation. But, please contact our Person In Charge first for our availability via WhatsApp at ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "https://wa.me/6281229947468",
        },
        "081229947468 (Fida)."
      )
    ),
  },
  {
    question: "When will you have openings for new recruits?",
    answer: React.createElement(
      "p",
      { className: "" },
      "Usually we will be having Open Recruitments around November - January. But, there's no guarantee that we are going to have the Open Recruitments during those time. So, don't forget to follow our ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "https://instagram.com/srtunsoed",
        },
        "Instagram"
      ),
      " if you haven't already. Cause we will definitely be announcing the Open Recruitments there. See ya!!"
    ),
  },
  {
    question: "Do you have an internship program?",
    answer: React.createElement(
      "p",
      { className: "" },
      "Yes, we do have internship programs for those that want to know more about how we work internally and once again we will definitely be announcing this news on our ",
      React.createElement(
        "a",
        {
          style: { "text-decoration": "underline" },
          href: "https://instagram.com/srtunsoed",
        },
        "Instagram."
      ),
      " So, definitely worth to follow so you don't miss any of our programs!"
    ),
  },
];
