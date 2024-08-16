import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import FormTab from "./components/FormTab";

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
