import React from "react";
import { Note } from "../types/notes";
async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/notes/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function Page({ params }: { params: { id: string } }) {
  const data: Note = await getData(params.id);
  return (
    <div className=" bg-white p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-gray-700 mt-5">{data.summary}</p>
    </div>
  );
}

export default Page;
