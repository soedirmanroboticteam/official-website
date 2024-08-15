import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProfileForm from "./components/ProfileForm";
import SectionTitle from "@/components/SectionTitle";
import InternshipForm from "./components/InternshipForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

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
  name: string;
}

interface StudentCodesInterface {
  id: number;
  name: string;
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

  const [majors, years, student_codes, options] = await Promise.all([
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
      .from("student_codes")
      .select("id, name")
      .order("name", { ascending: true })
      .returns<StudentCodesInterface[]>(),
    supabase
      .from("options")
      .select("id, name")
      .order("id", { ascending: true })
      .returns<OptionsInterface[]>(),
  ]);

  if (majors.error || years.error || student_codes.error || options.error) {
    return (
      <div>
        Error:{" "}
        {majors.error?.message ||
          years.error?.message ||
          student_codes.error?.message ||
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

      <Tabs defaultValue="profile" className="w-full max-w-3xl">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="internship">Internship</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <SectionTitle
            title="Profile Form"
            desc="You'll only need to fill this form once and you can edit it later."
          />
          <ProfileForm
            userId={data.user.id}
            majors={majors.data}
            years={years.data}
            student_codes={student_codes.data}
          />
        </TabsContent>
        <TabsContent value="internship">
          <SectionTitle
            title="Internship Form"
            desc="You'll need to fill all the data at once. But, you can edit it later until the end of the time. Only the last saved data will be considered."
          />
          <InternshipForm userId={data.user.id} options={options.data} />
        </TabsContent>
      </Tabs>

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
