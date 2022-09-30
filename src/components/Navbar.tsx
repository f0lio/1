import React from "react";

import { Popover, Transition } from "@headlessui/react";
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";
import { HiMenu as OpenIcon } from "react-icons/hi";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";

import Link from "@components/common/Link";

import { MaxWidthWrapper } from "./common/Containers";

interface NavItemProps {
  href: string;
  isActive: boolean | undefined;
  className?: string | undefined;
  scroll?: boolean | undefined;
}

const ToggleButton = ({
  isOpen,
  onClick,
}: {
  isOpen?: boolean | undefined;
  onClick: () => void;
}) => (
  <button
    className="h-11 py-2 text-white outline-none hover:text-primary-3"
    onClick={() => onClick()}
  >
    {isOpen ? (
      <CloseIcon className="h-full w-full" />
    ) : (
      <OpenIcon className="h-full w-full" />
    )}
  </button>
);

const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  isActive,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  className: string;
}) => {
  return (
    <Link href={href} passHref>
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={1}
        dragPropagation
        dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "font-primary max-h-min cursor-pointer rounded-2xl py-3 px-4 font-mono text-sm underline duration-150 hover:bg-gray-900 hover:text-primary-3",
          {
            " text-primary-3": isActive,
            "text-primary-1": !isActive,
          },
          className
        )}
      >
        {children}
      </motion.div>
    </Link>
  );
};

const Navbar = ({ pageName }: { pageName: string }) => (
  <>
    <Popover className="relative flex justify-center py-8">
      <MaxWidthWrapper>
        <AnimateSharedLayout>
          <nav className="flex items-center justify-between sm:justify-between">
            <div className="flex px-3 sm:hidden">
              <NavItem
                isActive={pageName == "home"}
                href="/"
                className="text-xl"
              >
                ~F0lio
              </NavItem>
            </div>
            <ul className="hidden items-center justify-center gap-x-6 sm:flex ">
              <NavItem isActive={pageName == "home"} href="/">
                ~F0lio
              </NavItem>
              <NavItem isActive={pageName == "projects"} href="projects">
                /projects
              </NavItem>
              <NavItem isActive={pageName == "etc"} href="etc">
                /etc
              </NavItem>
            </ul>
            <div className="hidden items-center sm:flex">
              <NavItem isActive={pageName == "contact"} href="contact">
                /contact
              </NavItem>
            </div>

            <Popover.Button className="px-4 sm:hidden">
              <span className="sr-only">Open main menu</span>
              <ToggleButton isOpen={false} onClick={() => {}} />
            </Popover.Button>
          </nav>
        </AnimateSharedLayout>
      </MaxWidthWrapper>

      <Transition
        as={React.Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transition"
        >
          <div className="flex justify-end sm:hidden">
            <Popover.Button className="absolute top-6 right-4 z-50 ">
              <span className="sr-only">Close main menu</span>
              <ToggleButton isOpen={true} onClick={() => {}} />
            </Popover.Button>
          </div>
          <nav className="overflow-hidden rounded-lg shadow-md ring-1 ring-black/5">
            <ul className="flex h-full items-center justify-between px-10 py-28 shadow-sm backdrop-blur-md">
              <NavItem isActive={pageName == "about"} href="about">
                /about
              </NavItem>
              <NavItem isActive={pageName == "projects"} href="projects">
                /projects
              </NavItem>
              <NavItem isActive={pageName == "etc"} href="etc">
                /etc
              </NavItem>

              <NavItem isActive={pageName == "contact"} href="contact">
                /contact
              </NavItem>
            </ul>
          </nav>
        </Popover.Panel>
      </Transition>
    </Popover>
  </>
);

export default Navbar;
