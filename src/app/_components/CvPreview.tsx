"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CvPreview({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full max-h-[90vh] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Resume Preview</h2>
        <div className="flex gap-2">
          <a
            href="/webbies-cv.pdf"
            download
            className={cn(buttonVariants({ variant: "outline" }), "bg-primary text-white")}
          >
            Download
          </a>
          <button
            onClick={onClose}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Close
          </button>
        </div>
      </div>
      <div className="w-full h-[calc(90vh-80px)] bg-background border rounded-lg overflow-hidden">
        <iframe
          src="/webbies-cv.pdf#view=FitH"
          className="w-full h-full"
          title="CV Preview"
        />
      </div>
    </div>
  );
} 