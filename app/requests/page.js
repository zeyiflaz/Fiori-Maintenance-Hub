"use client";
import { useEffect, useState } from "react";
import { getRequests, deleteRequest, updateStatus } from "../lib/storage";

export default function Requests() {
    const [search, setSearch] = useState("");
  const [requests, setRequests] = useState([]);
  

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  const handleDelete = (id) => {
    deleteRequest(id);
    setRequests(getRequests());
  };

  const handleStatus = (id, status) => {
    updateStatus(id, status);
    setRequests(getRequests());
  };

  return (
    
    <div>
      <h1 className="text-2xl mb-4">Arıza Talepleri</h1>
       <input
  className="border p-2 mb-4"
  placeholder="Makine ara..."
  onChange={(e) => setSearch(e.target.value)}
/> 
      <table className="border w-full">
        <thead>
          <tr className="border">
            <th>ID</th>
            <th>Makine</th>
            <th>Açıklama</th>
            <th>Öncelik</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>

        <tbody>
         {requests
  .filter((req) =>
    req.machine.toLowerCase().includes(search.toLowerCase())
  )
  .map((req) => (
            <tr key={req.id} className="border text-center">
              <td>{req.id}</td>
              <td>{req.machine}</td>
              <td>{req.description}</td>
              <td>
                    <span
                        className={
                        req.priority === "High"
                            ? "bg-red-500 text-white px-2 py-1 rounded"
                            : req.priority === "Medium"
                            ? "bg-yellow-400 px-2 py-1 rounded"
                            : "bg-green-500 text-white px-2 py-1 rounded"
                        }
                    >
                        {req.priority}
                    </span>
                </td>
              <td>{req.status}</td>
              <td className="flex gap-2 justify-center p-2">
                <button
                  className="bg-yellow-400 p-1"
                  onClick={() => handleStatus(req.id, "Atandı")}
                >
                  Ata
                </button>

                <button
                  className="bg-green-500 text-white p-1"
                  onClick={() => handleStatus(req.id, "Tamamlandı")}
                >
                  Tamamla
                </button>

                <button
                  className="bg-red-500 text-white p-1"
                  onClick={() => handleDelete(req.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}