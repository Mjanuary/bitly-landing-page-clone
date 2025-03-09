import Image from "next/image";
import { Button } from "@/components/button";
import {
  MdArrowForward,
  MdArrowUpward,
  MdKeyboardArrowDown,
  MdLanguage,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import Link from "next/link";
import { HeaderAction } from "@/components/header-action";
import { Banner } from "@/components/banner";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { RiPagesFill } from "react-icons/ri";
import { IoQrCode } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-base">
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

      <header className="bg-[#031f39] flex flex-col gap-8 lg:gap-10 pb-16">
        <div className="app-container text-center mx-auto flex gap-4 flex-col pt-12 lg:pt-24 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Build stronger digital connections
          </h1>
          <p className="lg:text-2xl">
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right information. Build, edit, and
            track everything inside the Bitly Connections Platform.
          </p>
        </div>
        <HeaderAction />

        <div className="mx-auto">
          <p className="text-2xl font-bold max-w-[340px] lg:max-w-fit mx-auto text-left lg:text-center">
            Sign up for free. Your free plan includes:
          </p>
          <div className="flex gap-3 px-8 lg:px-0 lg:mx-auto w-fit mt-3 lg:flex-row flex-col">
            {[
              "5 short links/month",
              "3 custom back-halves/month",
              "Unlimited link clicks",
            ].map((el, index) => (
              <div key={index} className="flex items-center text-sm gap-2">
                <FaRegCircleCheck className="text-xl text-orange-600" />{" "}
                <span>{el}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 w-fit mx-auto gap-4 justify-between mt-6">
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <div className="bg-gray-700 p-4 rounded-xl w-[150px]" key={el} />
            ))}
          </div>
        </div>
      </header>
      <ConnectionPlatform />
    </div>
  );
}

const ConnectionPlatform = () => {
  const featuresList = [
    {
      icon: <LuLink />,
      title: "URL Shortener",
      description:
        "A comprehensive solution to help make every point of connection between your content and your audience more powerful",
      featuresTitle: "Popular URL Shortening Features",
      features: [
        "URL shortening at scale",
        "AI-generated custom domains",
        "URL redirects",
        "Advanced analytics & tracking",
      ],
      url: "/short-link-card-opt.png",
    },
    {
      icon: <IoQrCode />,
      title: "QR Codes",
      description:
        "QR Code solutions for every customer, business and brand experience",
      featuresTitle: "Popular QR Code Features",
      features: [
        "Fully customizable QR Codes",
        "Dynamic QR Codes",
        "QR Code types & destination options",
        "Advanced analytics & tracking",
      ],
      url: "/qr-code-card-opt.png",
    },
    {
      icon: <RiPagesFill />,
      title: "Landing Pages",
      description:
        "Bitly Pages helps you create engaging, mobile-optimized landing pages in minutes.",
      featuresTitle: "Popular Landing Page Features",
      features: [
        "Custom URLs for social media",
        "Customizable landing page",
        "Easy-to-manage links",
        "Link and landing page tracking",
      ],
      url: "/pages-card-opt.png",
    },
  ];

  return (
    <section className="bg-[#f7f4ee] text-black text-center px-8 lg:px-0 ">
      <div className="app-container mx-auto py-20">
        <h3 className="uppercase lg:text-xl text-gray-600">
          Great Connections Start with a click OR SCAN
        </h3>
        <h2 className="text-2xl lg:text-4xl font-extrabold mt-3">
          The Bitly Connections Platform
        </h2>
        <p className="text- lg:text-xl lg:w-[80%] mx-auto mt-4 leading-6 lg:leading-8">
          All the products you need to build brand connections, manage links and
          QR Codes, and connect with audiences everywhere, in a single unified
          platform.
        </p>

        <div className="flex gap-3 mx-auto w-fit mt-8 lg:flex-row flex-col">
          <Button variant="blue" size="lg">
            Get started for free
            <MdArrowForward className="text-3xl inline-block ml-2" />
          </Button>
          <Button variant="blue-outline" size="lg">
            Get started for free
            <MdArrowForward className="text-3xl inline-block ml-2" />
          </Button>
        </div>

        <div className="mt-14 grid-cols-1 lg:grid-cols-3 grid gap-6 app-container">
          {featuresList.map(
            (
              { description, features, featuresTitle, icon, title, url },
              index
            ) => (
              <div
                key={index}
                className="border h-[562px] rounded-3xl overflow-hidden bg-[#eeeae3] relative group border-[#b9b7b0] transition"
              >
                <Image
                  src={url}
                  alt="cover"
                  width={400}
                  height={400}
                  className="w-full"
                />

                <div className="border-t p-5 px-6 border-[#b9b7b0] top-[25.5rem] group-hover:top-16 absolute rounded-4xl bg-white h-[562px] transition  ">
                  <div className="flex items-center gap-3 text-3xl font-bold">
                    <span className="text-orange-500">{icon}</span>
                    <h2 className="flex-1 text-left">{title}</h2>
                    <div>
                      <MdArrowUpward className="transition group-hover:rotate-180" />
                    </div>
                  </div>

                  <p className="text-left pt-5 text-sm">{description}</p>

                  <h4 className="text-left font-bold text-lg pt-8">
                    {featuresTitle}
                  </h4>
                  <div className="text-left flex item-center gap-3 pt-3 flex-col">
                    {features.map((el) => (
                      <div key={el} className="flex items-center gap-2">
                        <FaRegCircleCheck className="text-xl text-orange-600" />
                        <span className="text-gray-600">{el}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="blue" size="md">
                      Get started for free
                    </Button>
                    <Button variant="blue-outline" size="md">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
