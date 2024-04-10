import React, { useState } from "react";
import Link from "next/link";

const Sider = () => {
  return (
    <ul className="flex flex-col bg-slate-100 h-[100vh] w-1/6">
      <MenuCollapse
        title={"Localize"}
        items={
          <>
            <li className="">
              <Link
                className="w-full block hover:bg-orange-100 px-3 py-2 "
                href={"/localize/dynamic/new"}
              >
                Dynamic
              </Link>
            </li>
            <li className="">
              <Link
                className="w-full block hover:bg-orange-100 px-3 py-2 "
                href={"/localize/normal"}
              >
                Normal
              </Link>
            </li>
            <li className="">
              <Link
                className="w-full block hover:bg-orange-100 px-3 py-2 "
                href={"/localize"}
              >
                Home
              </Link>
            </li>
          </>
        }
      />

      <li className="">
        <Link
          className="w-full block hover:bg-orange-100 px-3 py-2 "
          href={"/practice/blob"}
        >
          blob test
        </Link>
      </li>
    </ul>
  );
};

const MenuCollapse = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full block hover:bg-orange-100 px-3 text-left py-2"
      >
        {title}
      </button>
      <div className={`${isOpen ? "h-auto " : "h-0 "} overflow-hidden pl-3`}>
        {items}
      </div>
    </div>
  );
};

export default Sider;
