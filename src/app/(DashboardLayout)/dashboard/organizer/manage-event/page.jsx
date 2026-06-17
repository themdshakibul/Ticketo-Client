import { Suspense } from "react";
import DashboardHeading from "@/Components/Apps/Dashboard/DashboardHeading/DashboardHeading";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { myEvents } from "@/lib/api/events/data";
import { Spinner } from "@heroui/react";
import ManageEventClient from "./ManageEventClient";

const ManageEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const evnts = await myEvents(session.user?.email);

  return (
    <div>
      <DashboardHeading
        title="Manage Events"
        description="Manage your events"
      />

      <Suspense fallback={<Spinner />}>
        <ManageEventClient evnts={evnts} />
      </Suspense>
    </div>
  );
};

export default ManageEventsPage;
