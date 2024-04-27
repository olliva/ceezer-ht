"use client";

import { usePathname } from "next/navigation";
import PageWrapper from "./PageWrapper";
import HeaderCartIcon from "./HeaderCartIcon";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="border-b border-solid border-slate-300 py-5 bg-orange-50">
      <PageWrapper>
        <nav>
          <NavLink key="/" path="/" isActive={currentPath === "/"}>
            Catalogue
          </NavLink>
          <NavLink key="/cart" path="/cart" isActive={currentPath === "/cart"}>
            Cart <HeaderCartIcon />
          </NavLink>
        </nav>
      </PageWrapper>
    </header>
  );
};

export default Header;
