import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not authenticated");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      userId: user.id as string
    }
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        userId: user.id,
        name: user.given_name ?? "",
        email: user.email ?? "",
        userImage: user.picture ?? "",
      }
    });
  };

  return NextResponse.redirect(`${process.env.BASE_URL}`);
}