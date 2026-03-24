"use client";
import { useEffect, useState } from "react";
import { getRequests } from "../lib/storage";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState({ bekleyen: 0, atanan: 0, tamamlanan: 0 });

  useEffect(() => {
    const requests = getRequests();

    const bekleyen = requests.filter(r => r.status === "Bekliyor").length;
    const atanan = requests.filter(r => r.status === "Atandı").length;
    const tamamlanan = requests.filter(r => r.status === "Tamamlandı").length;

    setStats({ bekleyen, atanan, tamamlanan });

    setData({
      labels: ["Bekliyor", "Atandı", "Tamamlandı"],
      datasets: [
        {
          label: "Talep Durumu",
          data: [bekleyen, atanan, tamamlanan],
          backgroundColor: ["#facc15", "#60a5fa", "#4ade80"], // Pie chart renkleri
        },
      ],
    });
  }, []);

  if (!data) return <div>Yükleniyor...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">Dashboard</h1>

      {/* SAYI KARTLARI */}
      <div className="flex gap-4 mb-6">
        <div className="bg-yellow-400 p-4 rounded shadow">
          <p className="text-sm">Bekleyen</p>
          <p className="text-xl font-bold">{stats.bekleyen}</p>
        </div>
        <div className="bg-blue-400 p-4 rounded shadow">
          <p className="text-sm">Atanan</p>
          <p className="text-xl font-bold">{stats.atanan}</p>
        </div>
        <div className="bg-green-400 p-4 rounded shadow">
          <p className="text-sm">Tamamlanan</p>
          <p className="text-xl font-bold">{stats.tamamlanan}</p>
        </div>
      </div>

      {/* GRAFİK */}
      <div className="w-96">
        <Pie data={data} />
      </div>
    </div>
  );
}