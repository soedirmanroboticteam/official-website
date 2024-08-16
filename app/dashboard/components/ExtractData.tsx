"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { InternApplication } from "./columns";

const ExtractData = ({ datas }: { datas: InternApplication[] }) => {
  return (
    <div className="flex justify-end">
      <Button
        className="rounded-md"
        onClick={() =>
          navigator.clipboard.writeText(
            datas
              .map(
                (data) =>
                  `${data.profiles.name}, ${data.profiles.email}, ${
                    data.profiles.majors.faculties.name
                  }, ${data.profiles.majors.name}, ${
                    data.profiles.majors.faculties.alphabet_codes.name +
                    data.profiles.majors.degrees.code.toString() +
                    data.profiles.majors.alphabet_codes.name +
                    data.profiles.years.name.toString().padStart(3, "0") +
                    data.profiles.student_code_id.toString().padStart(3, "0")
                  }, ${data.profiles.whatsapp}, ${data.first.name}, ${
                    data.first_reason
                  }, ${data.second.name}, ${data.second_reason}, ${
                    data.hope
                  }, ${data.cv_url}, ${data.twibbon_url}, ${data.updated_at}`
              )
              .join("\n")
          )
        }
      >
        Copy all data as CSV
      </Button>
    </div>
  );
};

export default ExtractData;
