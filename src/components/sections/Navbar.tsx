"use client";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import React, {useEffect, useState} from "react";

import {Dialog} from "@headlessui/react";
import Image from "next/image";
import Logo from "~/assets/mark.svg";

const navigation = [
  {name: "Pricing", href: "#"},
  {name: "Features", href: "#"},
  {name: "About", href: "#"},
  {name: "Guide", href: "#"},
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`absolute z-40 top-0 inset-x-0 duration-500 bg-transparent`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-neutral-800"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="#"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 duration-300"
          >
            Dashboard
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={Logo} alt="" />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Dashboard
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
