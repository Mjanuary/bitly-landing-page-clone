import Image from "next/image";
import Link from "next/link";
import { FaChartSimple } from "react-icons/fa6";
import { FiHome, FiGlobe } from "react-icons/fi";
import { IoLink, IoQrCode } from "react-icons/io5";
import { LuFolderHeart } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { Button } from "../button";

export const SideNavigation = () => (
  <div className="fixed top-0 left-0 bottom-0 p-3 w-[230px] border-r border-r-gray-300 bg-white z-40">
    <Image
      src="/logo.svg"
      width={200}
      height={100}
      alt="Main Yves"
      className="w-[100px] h-[50px]"
    />

    <div className="flex flex-col pt-8">
      <Button variant="blue">Create new</Button>

      <div className="text-black border-t mt-2 border-gray-200 flex flex-col gap-3 pt-6">
        {[
          { icon: <FiHome />, title: "Home", href: "" },
          { icon: <IoLink />, title: "Links", href: "" },
          { icon: <IoQrCode />, title: "QR Codes", href: "" },
          { icon: <RiPagesLine />, title: "Pages", href: "" },
          { icon: <FaChartSimple />, title: "Analytics", href: "" },
          { icon: <LuFolderHeart />, title: "Campaigns", href: "" },
          { icon: <FiGlobe />, title: "Custom domain", href: "" },
        ].map(({ icon, title, href }, index) => (
          <Link
            href={href}
            className="flex gap-2 items-center px-3 rounded border-l-4 border-l-transparent hover:border-l-blue-500 hover:text-blue-600 hover:bg-blue-100 p-2"
            key={index}
          >
            <span className="text-xl">{icon}</span>
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
