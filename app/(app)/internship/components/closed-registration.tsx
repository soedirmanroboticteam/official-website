import SectionTitle from "@/components/section-title";
import { createClientBrowserServer } from "@/utils/supabase/server";
import React from "react";

async function ClosedRegistration() {
  const supabase = createClientBrowserServer();

  const applicantsCount = await supabase.rpc("get_applicants_count");

  if (applicantsCount.error) {
    return <div>Error: {applicantsCount.error.message}</div>;
  }

  return (
    <main className="container mx-auto py-4 space-y-4">
      <SectionTitle
        title="Closed Registration"
        desc="Thank you for your participation! Now that the registration is closed. For those that have filled our form, you'll be contacted soon. Further information will be provided via WhatsApp Group."
      />
      <h3 className="text-center text-8xl font-semibold">
        {applicantsCount.data} <br />
      </h3>
      <h4 className="text-center text-3xl font-semibold">Registrant</h4>
    </main>
  );
}

export default ClosedRegistration;
