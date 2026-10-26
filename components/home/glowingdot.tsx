"use client";

import { useEffect, useState } from "react";

export default function Glow() {
  const [color, setColor] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => !prev);
    }, 600);
    return () => clearInterval(interval);
  });
  return (
    <span
      className={`h-2.5 w-2.5 rounded-xl ${color ? "bg-text-primary" : "bg-text-primary/50"} transition-all ease-in duration-200`}
    ></span>
  );
}
