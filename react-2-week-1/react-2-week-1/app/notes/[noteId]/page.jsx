"use client";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Note({ params }) {
  const path = usePathname();
  const query = useSearchParams();
  const allQuery = Object.fromEntries(query.entries());

  return (
    <main>
      <p>{JSON.stringify(params)}</p> <p> {path}</p>
      <p> {allQuery}</p>
    </main>
  );
}
