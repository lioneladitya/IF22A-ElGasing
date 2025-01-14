"use client";

import React, { useEffect, useState } from "react";
import { checkData, saveData } from "../../models/mahasiswa";

export default function EditPage({
  params,
}: {
  params: { npm: string };
}) {
  const decodedNpm = atob(decodeURIComponent(params.npm));
  const [data, setData] = useState({
    npm: "",
    nama: "",
    prodi: "",
  });

  useEffect(() => {
    async function fetchData() {
      const [result] = await checkData(decodedNpm);
      if (result) {
        setData({
          npm: result.npm,
          nama: result.nama,
          prodi: result.prodi,
        });
      }
    }
    fetchData();
  }, [decodedNpm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveData(data.npm, data.nama, data.prodi);
    alert("Data berhasil disimpan!");
    location.href = "/"; // Redirect ke halaman utama
  };

  return (
    <div>
      <h1>Edit Data Mahasiswa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="npm">NPM:</label>
          <input
            type="text"
            id="npm"
            name="npm"
            value={data.npm}
            onChange={handleChange}
            readOnly // Tidak dapat diubah
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="nama">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={data.nama}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Isi Nama Mahasiswa"
          />
        </div>
        <div>
          <label htmlFor="prodi">Program Studi:</label>
          <select
            id="prodi"
            name="prodi"
            value={data.prodi}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          >
            <option value="">Pilih Program Studi Mahasiswa</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Teknik Komputer">Teknik Komputer</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Manajemen Informatika">Manajemen Informatika</option>
          </select>
        </div>
        <div className="flex mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => (location.href = "/")}
            className="bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}