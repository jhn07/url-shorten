
import { redirect } from "next/navigation";
import { getCurrentUrl, updateClickCount } from "./action";
import { unstable_noStore as noStore } from "next/cache";

type RedirectPageParams = {
  params: {
    shortId: string
  }
}

export default async function RedirectPage({ params }: RedirectPageParams) {
  noStore();
  const recordURl = await getCurrentUrl(params.shortId);

  if (!recordURl || !recordURl.longUrl) {
    return redirect("/dashboard");
  }

  await updateClickCount(params.shortId);

  return redirect(recordURl.longUrl);
}
