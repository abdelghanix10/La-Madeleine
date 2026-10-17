"use client";

import { ReactNode } from "react";
import PageTransition from "@/components/layout/PageTransition";

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
