"use server";

import prisma from "@/lib/db";



export const getUserURLs = async (userId: string) => {
  const data = await prisma.shortenURL.findMany({
    where: {
      userId: userId
    },
    select: {
      id: true,
      longUrl: true,
      shortUrl: true,
      urlId: true,
      clickCount: true
    }
  })

  return data
}