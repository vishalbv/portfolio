"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Resume() {
  const resumePath = "/assets/pdf/Vishal_BV_React_6yrs.pdf";
  const pdfViewerUrl = `${resumePath}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState("800px");

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // Get the aspect ratio of A4 paper (1:1.414)
        const width = iframeRef.current.offsetWidth;
        const height = width * 1.414;
        setIframeHeight(`${height}px`);
      }
    };

    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Vishal_BV_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold"></h1>
        <Button onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[800px] mx-auto">
        <iframe
          ref={iframeRef}
          src={pdfViewerUrl}
          className="w-full border-none"
          title="Resume PDF"
          style={{
            display: "block",
            height: iframeHeight,
          }}
        />
      </div>
    </section>
  );
}
