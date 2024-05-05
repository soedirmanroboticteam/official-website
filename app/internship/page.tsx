import { Button } from "@/components/ui/button";
import { logoutServer } from "@/lib/actions/server";
import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <form action={logoutServer}>
        <Button>SignOut</Button>
      </form>
      this is protected page
    </div>
  );
}
