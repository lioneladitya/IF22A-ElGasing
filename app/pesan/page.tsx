"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PesanPage = () => {
  const searchParams = useSearchParams();

  // Ambil data dari query parameter
  const place = searchParams.get("place") || "";
  const country = searchParams.get("country") || "";
  const price = searchParams.get("price") || "";
  const rating = searchParams.get("rating") || "";

  // State untuk input tambahan
  const [customerName, setCustomerName] = useState("");
  const [visaNumber, setVisaNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesanan berhasil dibuat untuk ${customerName} dengan visa ${visaNumber || "tidak ada"}.`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Form Pemesanan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nama Tempat Wisata:</label>
          <input
            type="text"
            value={place}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Alamat:</label>
          <input
            type="text"
            value={country}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Harga:</label>
          <input
            type="text"
            value={price}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Rating:</label>
          <input
            type="text"
            value={rating}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nama Pelanggan:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Masukkan nama Anda"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">No Visa (Opsional):</label>
          <input
            type="text"
            value={visaNumber}
            onChange={(e) => setVisaNumber(e.target.value)}
            placeholder="Masukkan nomor visa (jika ada)"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Kirim Pemesanan
        </button>
      </form>
    </div>
  );
};

export default PesanPage;
