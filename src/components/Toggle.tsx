"use client";

import { useState } from "react";

export default function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
        on ? "bg-accent" : "bg-[rgba(255,255,255,0.1)]"
      }`}
    >
      <span
        className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 ${
          on ? "left-[23px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}
