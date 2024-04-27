"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PageWrapper from "./PageWrapper";
import { ACTIVE_TEXT_COLOR, ACTIVE_TEXT_COLOR_HOVER } from "@/constants";
import HeaderCartIcon from "./HeaderCartIcon";
import React from "react";

interface HeaderLinkProps {
  path: string;
  name: React.ReactNode | React.ReactNode[];
  isActive?: boolean;
}
const HeaderLink = (props: HeaderLinkProps) => {
  return (
    <Link
      href={props.path}
      className={`${
        props.isActive &&
        `${ACTIVE_TEXT_COLOR} hover:${ACTIVE_TEXT_COLOR_HOVER}`
      } mr-2 transition-all`}
    >
      {props.name}
    </Link>
  );
};
const Header = () => {
  const currentPath = usePathname();

  const headerLinks: HeaderLinkProps[] = [
    {
      path: "/",
      name: "Catalogue",
      isActive: currentPath === "/",
    },
    {
      path: "/cart",
      name: ["Cart", " ", <HeaderCartIcon />],
      isActive: currentPath === "/cart",
    },
  ];

  return (
    <header className="border-b border-solid border-slate-300 py-5 bg-orange-50">
      <PageWrapper>
        <nav>
          {headerLinks.map((item) => (
            <HeaderLink key={item.path} {...item} />
          ))}
        </nav>
      </PageWrapper>
    </header>
  );
};

export default Header;
