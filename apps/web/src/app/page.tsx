"use client";

import { slugify, capitalize } from "@myapp/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const [text1, setText1] = useState("welcome to turbo repo");
  const [text2, setText2] = useState("Hello World From Monorepo");
  const router =useRouter();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center gap-8 p-8">
      {/* Box 1 */}
      <div className="w-80 bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Capitalize</h2>

        <p className="mb-6 text-gray-700">{text1}</p>

        <button
          onClick={() => setText1(capitalize(text1))}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Capitalize Text
        </button>
      </div>

      {/* Box 2 */}
      <div className="w-80 bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Slugify</h2>

        <p className="mb-6 text-gray-700">{text2}</p>

        <button
          onClick={() => setText2(slugify(text2))}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Slugify Text
        </button>
      </div>

      <div className="w-80 bg-white rounded-xl shadow-lg p-6 text-center">
        <button onClick={()=>{router.push('/api_data')}} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">check api</button>
      </div>
    </main>
  );
}