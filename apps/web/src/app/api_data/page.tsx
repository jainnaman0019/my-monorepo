"use client"
import { useState } from "react"
import { useEffect } from "react";

export default function api_data(){
    const [data,setdata]=useState<any>(null);

    useEffect(()=>{
        fetch("http://localhost:3002/")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err));
    },[data]);

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Data From Express API
        </h1>


        {data ? (
          <>
            <p className="text-lg text-black">
              <strong>Name:</strong> {data.name}
            </p>

            <p className="mt-3 text-black">
              <strong>Message:</strong> {data.message}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
    );
}