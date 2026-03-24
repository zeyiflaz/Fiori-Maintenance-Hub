"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create-request">Arıza Bildir</Link>
      <Link href="/requests">Talepler</Link>
      <Link href="/login">Çıkış</Link>
    </div>
  );
}