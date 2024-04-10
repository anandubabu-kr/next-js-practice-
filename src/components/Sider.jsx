import React from "react";
import Link from "next/link";

const Sider = () => {
  return (
    <ul className="flex flex-col bg-slate-100 h-[80vh] w-1/6">
      <li className="">
        <Link
          className="w-full block hover:bg-slate-300 px-1 py-2 bg-slate-200"
          href={"/dynamic/new"}
        >
          Dynamic
        </Link>
      </li>
      <li className="">
        <Link
          className="w-full block hover:bg-slate-300 px-1 py-2 bg-slate-200"
          href={"/normal"}
        >
          Normal
        </Link>
      </li>
      <li className="">
        <Link
          className="w-full block hover:bg-slate-300 px-1 py-2 bg-slate-200"
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li className="">
        <Link
          className="w-full block hover:bg-slate-300 px-1 py-2 bg-slate-200"
          href={"/practice/blob"}
        >
          blob test
        </Link>
      </li>
    </ul>
  );
};

export default Sider;
