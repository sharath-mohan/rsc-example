import React, { ReactNode } from "react";
import SidebarNoteContent from "./SidebarNoteContent";
import { Note } from "@/app/types/notes";

function SideBarNote({ note }: { note: Note }) {
  const now = new Date();
  return (
    <SidebarNoteContent
      id={note.id}
      expandedChildren={
        <p className="text-sm text-gray-600 mt-3">
          {`${note.summary.slice(0, 100)}...`}
        </p>
      }
    >
      <div>
        <h3 className="font-bold">{note.title}</h3>
        <p className="text-sm pt-2 text-gray-600">{now.toISOString()}</p>
      </div>
    </SidebarNoteContent>
  );
}

export default SideBarNote;
