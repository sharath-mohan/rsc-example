"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";

function SidebarNoteContent({
  id,
  children,
  expandedChildren,
}: {
  id: number;
  children: ReactNode;
  expandedChildren: ReactNode;
}) {
  const router = useRouter();
  const [expand, setExpand] = useState(false);
  return (
    <div
      className="group rounded-md bg-gray-100 p-5"
      onClick={() => router.push(`/${id}`)}
    >
      <div className="flex justify-between">
        {children}
        <button
          className={`hidden group-hover:block grid place-items-center h-8 w-8 rounded-full bg-gray-200 self-start ${
            expand ? "rotate-90" : "-rotate-90"
          }`}
          onClick={(event) => {
            event.stopPropagation();
            setExpand(!expand);
          }}
        >
          &#8249;
        </button>
      </div>
      {expand && expandedChildren}
    </div>
  );
}

export default SidebarNoteContent;
