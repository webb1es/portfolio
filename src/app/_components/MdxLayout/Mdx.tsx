import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { components } from "./mdx-components";

export const Mdx = ({ content }: { content: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source={content} components={components} />
    </Suspense>
  );
};
