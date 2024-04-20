"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader";
import { Square } from "lucide-react";
// import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Video Conferencing",
  },
  {
    text: "Screen Sharing",
  },
  {
    text: "Instant Meeting",
  },
  {
    text: "File Synchronization",
  },
  {
    text: "Security and Privacy Features",
  },
  {
    text: "Schedule Meeting",
  },
  {
    text: "Private Room",
  },
  {
    text: "Feedback and Review",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[20vh] flex items-center justify-center text-white">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000}/>
      <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-3xl px-8 py-6 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Features
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-white dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <Square className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
