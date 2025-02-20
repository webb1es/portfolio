"use server";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

export const incrementViews = async (
  slug: string
): Promise<{ views: number }> => {
  const cookieList = await cookies();
  const currentArticleCookieDate = cookieList.get(
    `articleViews:${slug}`
  )?.value;
  const KEY = `article:views:${slug}`;

  if (currentArticleCookieDate) {
    return {
      views: Number(await redis.get(KEY)),
    };
  }

  const newViewsCount = await redis.incr(KEY);

  cookieList.set(`articleViews:${slug}`, new Date().toISOString(), {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    httpOnly: true,
  });

  return { views: newViewsCount };
};
