import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(req: NextRequest) {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    return NextResponse.json({ error: "User Unauthorized" }, { status: 500 });
  };

  const { longURL } = await req.json();
  if (!longURL) {
    return NextResponse.json({ message: "Missing longURL" }, { status: 400 });
  };

  const { shortUrl, urlId } = generateURL(6);

  await prisma.shortenURL.create({
    data: {
      userId: user.id,
      longUrl: longURL,
      shortUrl: shortUrl,
      urlId: urlId,
    }
  });

  revalidatePath("/dashboard");
  return NextResponse.json({ message: "Success" });
}


function generateURL(num: number) {
  const shortUrlId = nanoid(num);
  return {
    shortUrl: `${process.env.BASE_URL}/${shortUrlId}`,
    urlId: shortUrlId
  };
}