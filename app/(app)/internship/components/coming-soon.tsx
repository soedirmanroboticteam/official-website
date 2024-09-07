import SectionTitle from "@/components/section-title";
import { Progress } from "@/components/ui/progress";
import React from "react";

function ComingSoon({ coming, start }: { coming: Date; start: Date }) {
  return (
    <main className="container mx-auto py-4">
      <SectionTitle
        title="Coming Soon"
        desc="Stay tuned at our Instagram @srtunsoed for the latest updates! Don't forget to join our upcoming Open House Events too!"
      />
      <Progress
        value={
          ((coming.getTime() - Date.now()) /
            (coming.getTime() - start.getTime())) *
          100
        }
      />
    </main>
  );
}

export default ComingSoon;
