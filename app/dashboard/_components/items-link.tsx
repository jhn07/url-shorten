import { Card } from "@/components/ui/card";
import { ItemView } from "./item-view";

type ItemsLinkProps = {
  id: number;
  longUrl: string | null;
  shortUrl: string | null;
  urlId: string | null
  clickCount: number | null
}

export const ItemsLink = ({ id, longUrl, shortUrl, urlId, }: ItemsLinkProps) => {
  return (
    <Card className="flex flex-col gap-3 max-w-xl p-2 overflow-hidden duration-300 hover:shadow-[0px_0px_20px_4px_#facc1520,_0px_5px_30px_#a465db]  dark:bg-gray-200 dark:text-black dark:shadow-[0px_0px_20px_4px_#facc1520,_0px_5px_30px_#a465db]">
      <ItemView label="Original URL" url={longUrl as string} />
      <hr />
      <ItemView label="Short URL" hrefUrl={`/dashboard/${urlId}`} url={shortUrl as string} />
    </Card>
  )
}

