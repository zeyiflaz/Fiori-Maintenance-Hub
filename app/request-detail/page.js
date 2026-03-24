"use client";
import { useSearchParams } from "next/navigation";
import { getRequests } from "./lib/storage";

export default function Detail() {
  const params = useSearchParams();
  const id = params.get("id");

  const requests = getRequests();
  const request = requests.find((r) => r.id == id);

  if (!request) return <div>Talep bulunamadı</div>;

  return (
    <div>
      <h1 className="text-2xl mb-4">Talep Detayı</h1>

      <p><b>Makine:</b> {request.machine}</p>
      <p><b>Açıklama:</b> {request.description}</p>
      <p><b>Öncelik:</b> {request.priority}</p>
      <p><b>Durum:</b> {request.status}</p>
    </div>
  );
}