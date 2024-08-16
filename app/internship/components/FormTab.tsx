"use client";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import InternshipForm from "./InternshipForm";

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

  return (
    <Tabs defaultValue="profile" className="w-full max-w-3xl">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="internship" disabled={!verified}>
          Internship
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <SectionTitle
          title="Profile Form"
          desc="You'll only need to fill this form at once and you can edit it later. Only then you can proceed to fill out your internship application."
        />
        <ProfileForm
          userId={userId}
          majors={majors}
          years={years}
          setVerified={setVerified}
        />
      </TabsContent>
      <TabsContent value="internship">
        <SectionTitle
          title="Internship Form"
          desc="You'll need to fill all the data at once. But, you can edit it later until the end of the time. Only the last saved data will be considered."
        />
        <InternshipForm userId={userId} options={options} />
      </TabsContent>
    </Tabs>
  );
};

export default FormTab;
