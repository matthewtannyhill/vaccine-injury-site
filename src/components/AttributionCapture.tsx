"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordVisit } from "@/lib/attribution-storage";

/** Records first-touch visit data. Renders nothing. */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    recordVisit(pathname);
  }, [pathname]);

  return null;
}
