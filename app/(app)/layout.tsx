import NavigationBar from "@/app/(app)/components/navigation-bar";
import Footer from "@/components/main-footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
