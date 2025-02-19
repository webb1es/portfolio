"use client";

import useSWR from "swr";
import {incrementViews} from "./views.action";

export const ViewCount = ({slug}: { slug: string }) => {
    const {data} = useSWR(`article:views:${slug}`, async () => {
        return incrementViews(slug);
    });

    if (!data) return null;

    return (
        <div className="flex items-center gap-2">
      <span className="text-sm text-primary">
        {data.views} {data.views === 1 ? "view" : "views"}
      </span>
        </div>
    );
};
