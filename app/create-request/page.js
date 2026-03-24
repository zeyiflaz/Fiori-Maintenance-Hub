"use client";
import { useState } from "react";
import { saveRequest } from "../lib/storage";

export default function CreateRequest() {
  const [form, setForm] = useState({
    machine: "",
    description: "",
    priority: "Low",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRequest(form);
    alert("Talep kaydedildi");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Arıza Bildir</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-96">
        <input
          className="border p-2"
          placeholder="Makine adı"
          onChange={(e) => setForm({ ...form, machine: e.target.value })}
        />

        <textarea
          className="border p-2"
          placeholder="Arıza açıklaması"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <select
          className="border p-2"
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="bg-blue-500 text-white p-2">
          Gönder
        </button>
      </form>
    </div>
  );
}