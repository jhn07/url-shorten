import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserURLs } from "./action";
import { ItemsLink } from "./_components/items-link";
import { unstable_noStore as noStore } from "next/cache";

export default async function Dashboard() {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    redirect("/");
  };

  const dataUrls = await getUserURLs(user.id);

  return (
    <div className="max-w-7xl mx-auto mt-10 flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Your URL&rsquo;s</CardTitle>
        </CardHeader>
      </Card>
      <div className="grid md:grid-cols-4 gap-10 py-4">
        {dataUrls.map((item) => (
          <ItemsLink key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

