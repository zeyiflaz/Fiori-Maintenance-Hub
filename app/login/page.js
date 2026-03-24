"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Hatalı giriş");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">Giriş Yap</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-64">
        <input
          className="border p-2"
          placeholder="Kullanıcı adı"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          className="border p-2"
          placeholder="Şifre"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="bg-blue-500 text-white p-2">
          Giriş
        </button>
      </form>
    </div>
  );
}