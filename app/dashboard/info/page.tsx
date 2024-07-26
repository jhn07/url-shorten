import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUserURLs } from "../action"
import { unstable_noStore as noStore } from "next/cache";

export default async function InfoPage() {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    redirect("/");
  };

  const dataUrls = await getUserURLs(user.id);

  return (
    <div className="max-w-5xl mx-auto mt-10 w-full">
      <Table>
        <TableCaption>A list of your links.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">url_id</TableHead>
            <TableHead>original</TableHead>
            <TableHead>Short URL</TableHead>
            <TableHead className="text-right">Click Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataUrls.map((url) => (
            <TableRow key={url.id}>
              <TableCell className="font-medium">{url.urlId}</TableCell>
              <TableCell>{url.longUrl}</TableCell>
              <TableCell>{url.shortUrl}</TableCell>
              <TableCell className="text-right">{url.clickCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
