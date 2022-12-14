import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleLeft } from "react-icons/fa";
import { TABS } from "../contants/contants";

const HeaderTab = () => {
  const { pathname } = useRouter();
  const selected = TABS.findIndex((tab) => tab.href === pathname);

  return (
    <Tab.Group defaultIndex={selected}>
      <Tab.List className="flex gap-x-1 rounded-xl px-4">
        {pathname === "/link/[shortUrl]" ? (
          <Link
            href="/"
            className="group border-gray-500 px-1 py-2 outline-none"
          >
            <Tab className="flex w-full max-w-fit items-center gap-x-2 rounded-md px-3 py-2 text-sm text-white outline-none group-hover:bg-gray-800">
              <FaAngleLeft />
              All links
            </Tab>
          </Link>
        ) : (
          TABS.map((tab, index) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`${
                selected === index && "border-b"
              } group border-gray-500 px-1 py-2 outline-none`}
            >
              <Tab className="w-full max-w-fit rounded-md px-3 py-2 text-sm text-white outline-none group-hover:bg-gray-800">
                {tab.name}
              </Tab>
            </Link>
          ))
        )}
      </Tab.List>
    </Tab.Group>
  );
};

export default HeaderTab;
