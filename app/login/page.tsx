import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "./components/AuthForm";
import { createClientBrowserServer } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = createClientBrowserServer();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

  return (
    <div className="h-screen w-screen flex-1 flex flex-col mx-auto px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <AuthForm />
    </div>
  );
}
