// PesanPage dengan pengiriman data ke API
"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PesanPage = () => {
  const searchParams = useSearchParams();

  // Ambil data dari query parameter
  const place = searchParams?.get("place") || "Tidak Diketahui";
  const country = searchParams?.get("country") || "Tidak Diketahui";
  const price = searchParams?.get("price") || "0";
  const rating = searchParams?.get("rating") || "0";

  // State untuk input tambahan
  const [customerName, setCustomerName] = useState("");
  const [visaNumber, setVisaNumber] = useState("");

  const handleOrder = async () => {
    try {
      const orderData = {
        customerName,
        place,
        country,
        price,
        rating,
      };
  
      console.log("Sending order data:", orderData);
  
      const response = await fetch("/api/order/addorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Failed to create order");
      }
  
      console.log("Order created:", result);
      alert("Pesanan berhasil dibuat!");
    } catch (err: any) {
      console.error("Error:", err.message);
      alert(`Gagal membuat pesanan: ${err.message}`);
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Form Pemesanan</h1>
      <form onSubmit={handleOrder}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nama Tempat Wisata</label>
            <input
              type="text"
              value={place}
              readOnly
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Alamat</label>
            <input
              type="text"
              value={country}
              readOnly
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Harga</label>
            <input
              type="text"
              value={price}
              readOnly
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Rating</label>
            <input
              type="text"
              value={rating}
              readOnly
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nama Pelanggan</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black-700">No Visa (Opsional)</label>
            <input
              type="text"
              value={visaNumber}
              onChange={(e) => setVisaNumber(e.target.value)}
              placeholder="Masukkan nomor visa (jika ada)"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300"
        >
          Kirim Pemesanan
        </button>
      </form>
    </div>
  );
};

export default PesanPage;
