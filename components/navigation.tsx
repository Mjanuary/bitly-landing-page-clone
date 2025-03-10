import Image from "next/image";
import { Button } from "@/components/button";
import {
  MdKeyboardArrowDown,
  MdLanguage,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import Link from "next/link";
import { Banner } from "@/components/banner";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navigation = () => (
  <nav className="border-b border-gray-700 bg-[#031f39]">
    <Banner />
    <div className="px-3 lg:px-0 app-container py-2 mx-auto flex items-center justify-between">
      <Image
        src="/logo.svg"
        width={200}
        height={100}
        alt="Main Yves"
        className="w-[100px] h-[50px]"
      />

      <button className="lg:hidden block">
        <GiHamburgerMenu className="text-3xl" />
      </button>
      <div className="hidden lg:flex gap-4">
        {["Platform", "Solutions", "Pricing", "Resources"].map((app) => (
          <Link key={app} href={app} className="flex gap-1 items-center">
            {app} <MdKeyboardArrowDown />
          </Link>
        ))}
      </div>
      <div className="gap-2 hidden lg:flex">
        <Button variant="ghost" className="flex items-center gap-2">
          <MdLanguage /> Lang <MdOutlineArrowDropDown />
        </Button>
        <Button variant="ghost">Login</Button>
        <Button variant="outline">Get a quote</Button>
        <Button variant="white">Sign up Free</Button>
      </div>
    </div>
  </nav>
);
