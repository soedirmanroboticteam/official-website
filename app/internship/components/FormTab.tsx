"use client";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import InternshipForm from "./InternshipForm";
import InternshipNote from "./InternshipNote";
import WhatsAppGroup from "./WhatsAppGroup";

interface MajorInterface {
  id: number;
  name: string;
  faculties: {
    name: string;
  };
  degrees: {
    name: string;
  };
}

interface YearInterface {
  id: number;
  name: number;
}

interface OptionsInterface {
  id: number;
  name: string;
}

interface FormTabProps {
  userId: string;
  majors: MajorInterface[];
  years: YearInterface[];
  options: OptionsInterface[];
}

const FormTab = ({ userId, majors, years, options }: FormTabProps) => {
  const [verified, setVerified] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <Tabs defaultValue="profile" className="w-full max-w-3xl">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="internship" disabled={!verified}>
          Internship
        </TabsTrigger>
        <TabsTrigger value="final" disabled={!submitted}>
          Final Step
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="flex flex-col gap-1">
        <SectionTitle
          title="Profile Form"
          desc="You'll only need to fill this form at once and you can edit it later. Only then you can proceed to fill out your internship application."
        />
        <InternshipNote />
        <ProfileForm
          userId={userId}
          majors={majors}
          years={years}
          setVerified={setVerified}
        />
      </TabsContent>
      <TabsContent value="internship" className="flex flex-col gap-1">
        <SectionTitle
          title="Internship Form"
          desc="You'll need to fill all the data at once. But, you can edit it later until the end of the time. Only the last saved data will be considered."
        />
        <InternshipNote />
        <InternshipForm
          userId={userId}
          options={options}
          setSubmitted={setSubmitted}
        />
      </TabsContent>
      <TabsContent value="final" className="flex flex-col gap-1">
        <SectionTitle
          title="WhatsApp Group"
          desc="Further details about the next step will be delivered via WhatsApp Group. Make sure to join the WhatsApp Group by the QR code or the link down bellow. See you & Good Luck!!!"
        />
        <InternshipNote />
        <WhatsAppGroup />
      </TabsContent>
    </Tabs>
  );
};

export default FormTab;
