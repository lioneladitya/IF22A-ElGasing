"use client";

import { get } from "http";
import React, { useState } from "react";
import { checkData, saveData } from "../models/mahasiswa";
import Link from "next/link";

export default function AddPage() {
  // buat hook (use state)
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");

  // buat hook (use state)
  // untuk respon hasil fungsi "checkData"
  const [getValue, setValue] = useState({});

  // buat fungsi untuk respon fungsi "checkData"
  const checkNPM = async (npm: string) => {
    setValue(await checkData(npm));
  };

  // buat fungsi simpan data
  const setSaveData = async () => {
    // if (getNPM == "" ||
    //     getNama == "" ||
    //     getProdi == ""
    // ) {
    //   alert("Lengkapi Seluruh Data !");
    // } else {
    //   alert("Ok");
    //   alert("Yes");
    // }

    // ternary operator
    getNPM == "" || getNama == "" || getProdi == ""
      ? alert("Lengkapi Seluruh Data !")
      : [
          Object.values(getValue).length == 0
            ? [
                await saveData(getNPM, getNama, getProdi),
                alert("Data Berhasil Disimpan"),
                location.reload()
              ]
            : alert("NPM Sudah Pernah Digunakan !"),
        ];
  };

  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div className="col-start-1">NPM</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi NPM"
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNPM(e.target.value);
              checkNPM(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi Nama Mahasiswa"
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Program Studi</div>
        <div className="col-span-4">
          <select
            defaultValue={""}
            className="select select-success w-full"
            onChange={(e) => {
              setProdi(e.target.value);
            }}>
            <option value={""} disabled>
              Pilih Program Studi Mahasiswa
            </option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
          </select>
        </div>

        <div className="col-start-2 col-span-4">
          <button className="btn btn-neutral mr-5X w-28" onClick={setSaveData}>
            Simpan
          </button>
          <Link href={"/"} className="btn btn-active ml-5X w-28">Batal</Link>
        </div>
      </div>
    </>
  );
}