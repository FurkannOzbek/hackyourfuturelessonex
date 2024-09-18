"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Notes } from "./notes/page";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <h1> Notetaker</h1>
        <Link href="/notes">
          <button> GO to Notes</button>
        </Link>
      </div>
    </>
  );
}
