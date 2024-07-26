"use server";

import prisma from "@/lib/db"


export const getCurrentUrl = async (urlId: string) => {
  const recordURl = await prisma.shortenURL.findFirst({
    where: {
      urlId: urlId
    },
    select: {
      shortUrl: true,
      longUrl: true,
    }
  })

  return recordURl
}


export const updateClickCount = async (urlId: string) => {
  await prisma.shortenURL.update({
    where: {
      urlId: urlId
    },
    data: {
      clickCount: {
        increment: 1
      }
    }
  })
}