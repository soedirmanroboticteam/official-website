import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import FormTab from "@/app/internship/components/FormTab";
import SectionTitle from "@/components/SectionTitle";
import { Progress } from "@/components/ui/progress";

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

export default async function ProtectedPage() {
  const date = {
    coming: new Date("2024-08-11 00:00:00.000000+00"),
    debug: new Date("2024-08-18 00:00:00.000000+00"),
    start: new Date("2024-08-26 00:00:00.000000+00"),
    end: new Date("2024-08-29 00:00:00.000000+00"),
    extend: new Date("2024-08-31 00:00:00.000000+00"),
  };

  if (date.debug.getTime() < Date.now() && date.start.getTime() > Date.now()) {
    return (
      <main className="container mx-auto py-4">
        <SectionTitle
          title="Coming Soon"
          desc="Stay tuned at our Instagram @srtunsoed for the latest updates! Don't forget to join our upcoming Open House Events too!"
        />
        <Progress
          value={
            ((date.coming.getTime() - Date.now()) /
              (date.coming.getTime() - date.start.getTime())) *
            100
          }
        />
      </main>
    );
  }

  const supabase = createClientBrowserServer();

  const count = await supabase.from("intern_applications").select("");

  if (count.error) {
    return <div>Error: {count.error.message}</div>;
  }

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  if (Date.now() > date.extend.getTime())
    return (
      <main className="container mx-auto py-4 space-y-4">
        <SectionTitle
          title="Closed Registration"
          desc="Thank you for your participation! Now that the registration is closed. For those that have filled our form, you'll be contacted soon. Further information will be provided there."
        />
        <h3 className="text-center text-8xl font-semibold">
          {count.data.length} <br />
        </h3>
        <h4 className="text-center text-3xl font-semibold">registrant</h4>
      </main>
    );

  const [majors, years, options] = await Promise.all([
    supabase
      .from("majors")
      .select("id, name, faculties(name), degrees(name)")
      .order("faculty_id", { ascending: true })
      .returns<MajorInterface[]>(),
    supabase
      .from("years")
      .select("id, name")
      .order("name", { ascending: true })
      .returns<YearInterface[]>(),
    supabase
      .from("options")
      .select("id, name")
      .order("id", { ascending: true })
      .returns<OptionsInterface[]>(),
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
      {date.debug.getTime() < Date.now() ? null : (
        <section className="w-full max-w-3xl">
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Warning!!!</AlertTitle>
            <AlertDescription>
              This form is still under development! All the submitted data will
              be deleted until the official Open Internship is announced.
            </AlertDescription>
          </Alert>
        </section>
      )}

      <FormTab
        userId={data.user.id}
        majors={majors.data}
        years={years.data}
        options={options.data}
      />

      <section className="w-full max-w-3xl">
        <Progress
          value={
            Date.now() > date.end.getTime()
              ? ((date.end.getTime() - Date.now()) /
                  (date.end.getTime() - date.extend.getTime())) *
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

      {date.debug.getTime() < Date.now() ? null : (
        <section className="w-full max-w-3xl">
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Warning!!!</AlertTitle>
            <AlertDescription>
              This form is still under development! All the submitted data will
              be deleted until the official Open Internship is announced.
            </AlertDescription>
          </Alert>
        </section>
      )}
    </main>
  );
}
