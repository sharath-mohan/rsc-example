import React from "react";
import SideBarNote from "./SideBarNote";
import { Note } from "@/app/types/notes";
async function getData() {
  const res = await fetch("http://localhost:5000/notes");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function Sidebar() {
  const data: { notes: Note[] } = await getData();
  console.log(data);
  return (
    <section className="flex-grow-1 flex-shrink-0 w-[350px] shadow-lg bg-white">
      <div className="px-5 py-10">
        <div className="mb-5">RSC APP</div>
        <div className="flex flex-col gap-3">
          {data.notes.map((note) => (
            <SideBarNote key={note.id} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
