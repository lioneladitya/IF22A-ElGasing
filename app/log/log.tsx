// "use client";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUndo } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { getLogData, restoreData } from "./models/mahasiswa";

// // fungsi untuk mengembalikan data
// async function handleRestore(npm: string, nama: string) {
//   if (confirm(`Kembalikan Data Mahasiswa: ${npm} - ${nama}?`)) {
//     await restoreData(npm);
//     alert(`Data Mahasiswa: ${npm} - ${nama} berhasil dikembalikan.`);
//     location.reload(); // reload halaman untuk memperbarui data
//   }
// }

// export default function LogPage() {
//   const [logData, setLogData] = useState([]);

//   async function fetchLogData() {
//     setLogData(await getLogData());
//   }

//   useEffect(() => {
//     fetchLogData();
//   }, []);

//   return (
//     <>
//       <title>Log Data Mahasiswa</title>
//       <h1 className="text-center text-2xl font-bold mb-5">Log Data Mahasiswa</h1>

//       <table className="w-full">
//         <thead>
//           <tr className="bg-slate-300 h-12">
//             <th className="w-10% border border-slate-700">Aksi</th>
//             <th className="w-10% border border-slate-700">NPM</th>
//             <th className="w-1/2 border border-slate-700">Nama</th>
//             <th className="w-30% border border-slate-700">Prodi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logData.map((data: any, index: number) => (
//             <tr key={index}>
//               <td className="border border-slate-700 p-2.5 text-center">
//                 {/* Tombol untuk kembalikan data */}
//                 <button
//                   className="bg-green-500 text-white py-5X px-2.5 rounded-md text-sm"
//                   title="Kembalikan Data"
//                   onClick={() => handleRestore(data.npm, data.nama)}
//                 >
//                   <FontAwesomeIcon icon={faUndo} /> Kembalikan
//                 </button>
//               </td>
//               <td className="border border-slate-700 px-2.5 text-center">
//                 {data.npm}
//               </td>
//               <td className="border border-slate-700 px-2.5 text-justify">
//                 {data.nama}
//               </td>
//               <td className="border border-slate-700 px-2.5 text-center">
//                 {data.prodi}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }
