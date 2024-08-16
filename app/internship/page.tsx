import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import FormTab from "./components/FormTab";
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
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  test: if (new Date("2024-08-26 00:00:00.000000+00").getTime() > Date.now()) {
    break test;

    return (
      <main className="container mx-auto py-4">
        <SectionTitle
          title="Coming Soon"
          desc="Stay tuned at our Instagram @srtunsoed for the latest updates! Don't forget to join our upcoming Open House Events too!"
        />
        <Progress
          value={
            ((new Date("2024-08-11 00:00:00.000000+00").getTime() -
              Date.now()) /
              (new Date("2024-08-11 00:00:00.000000+00").getTime() -
                new Date("2024-08-26 00:00:00.000000+00").getTime())) *
            100
          }
        />
      </main>
    );
  }

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
      <section className="w-full max-w-3xl">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Warning!!!</AlertTitle>
          <AlertDescription>
            This form is still under development! All the submitted data will be
            deleted until the official Open Internship is announced.
          </AlertDescription>
        </Alert>
      </section>

      <FormTab
        userId={data.user.id}
        majors={majors.data}
        years={years.data}
        options={options.data}
      />

      <section className="w-full max-w-3xl">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Warning!!!</AlertTitle>
          <AlertDescription>
            This form is still under development! All the submitted data will be
            deleted until the official Open Internship is announced.
          </AlertDescription>
        </Alert>
      </section>
    </main>
  );
}
