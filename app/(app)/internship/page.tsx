import { createClientBrowserServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import FormTab from "./components/form-tab";
import { Progress } from "@/components/ui/progress";
import { Metadata } from "next";
import ComingSoon from "./components/coming-soon";
import ClosedRegistration from "./components/closed-registration";
import {
  Degrees,
  Faculties,
  Majors,
  Options,
  Years,
} from "@/app/types/global.types";
import Announcement from "./components/announcement";

export const metadata: Metadata = {
  title: "Internship",
  description: "Internship Application page",
};

export default async function page() {
  const supabase = createClientBrowserServer();

  const eventDate = await supabase
    .from("events")
    .select(
      "coming_soon, start, end, extend_start, extend_end, announcement, screening_url, warning"
    )
    .eq("name", "internship")
    .limit(1)
    .maybeSingle();

  if (!eventDate.data) {
    return <div>Error: Event date not found</div>;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const date = {
    coming: new Date(eventDate.data.coming_soon),
    start: new Date(eventDate.data.start),
    end: new Date(eventDate.data.end),
    extendStart: new Date(eventDate.data.extend_start),
    extendEnd: new Date(eventDate.data.extend_end),
    announcement: new Date(eventDate.data.announcement),
  };

  if (date.start.getTime() > Date.now()) {
    return <ComingSoon coming={date.coming} start={date.start} />;
  } else if (Date.now() > date.end.getTime()) {
    const { count, error } = await supabase
      .from("intern_applications")
      .select("*", { count: "exact", head: true });

    if (error || !count) {
      return <div>Error: {error?.message ?? "Unknown error"}</div>;
    }

    if (count > 0) {
      return <ClosedRegistration />;
    }

    if (
      Date.now() < date.extendStart.getTime() ||
      Date.now() > date.extendEnd.getTime()
    ) {
      return <ClosedRegistration />;
    }

    if (Date.now() > date.announcement.getTime()) {
      return (
        <main className="w-full flex flex-col gap-20 items-center justify-center p-4">
          <section className="w-full max-w-3xl space-y-4 font-poppins text-justify">
            <Announcement />
          </section>
        </main>
      );
    }
  }

  const [majors, years, options] = await Promise.all([
    supabase
      .from("majors")
      .select("*, faculties(*), degrees(*)")
      .order("faculty_id", { ascending: true })
      .returns<(Majors & { faculties: Faculties; degrees: Degrees })[]>(),
    supabase
      .from("years")
      .select("*")
      .order("name", { ascending: true })
      .returns<Years[]>(),
    supabase
      .from("options")
      .select("*")
      .eq("available", true)
      .order("id", { ascending: true })
      .returns<Options[]>(),
  ]);

  if (majors.error || years.error || options.error) {
    return (
      <div>
        Error:{" "}
        {majors.error?.message ||
          years.error?.message ||
          options.error?.message}
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col gap-20 items-center justify-center p-4">
      <FormTab
        userId={user.id}
        majors={majors.data}
        years={years.data}
        options={options.data}
        whatsAppGroupLink={eventDate.data.screening_url}
        warning={eventDate.data.warning}
      />

      <section className="w-full max-w-3xl">
        <Progress
          value={
            Date.now() > date.end.getTime()
              ? ((date.extendStart.getTime() - Date.now()) /
                  (date.extendStart.getTime() - date.extendEnd.getTime())) *
                100
              : ((date.start.getTime() - Date.now()) /
                  (date.start.getTime() - date.end.getTime())) *
                100
          }
          className={`${
            Date.now() > date.end.getTime() ? "bg-destructive/50" : ""
          }`}
        />
      </section>
    </main>
  );
}
