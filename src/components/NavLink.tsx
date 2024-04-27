import Link from "next/link";

interface NavLinkProps extends React.PropsWithChildren {
  path: string;
  isActive?: boolean;
}

const NavLink = (props: NavLinkProps) => {
  const activeColor = "text-lime-600";
  const activeColorHover = "hover:text-lime-400";

  return (
    <Link
      href={props.path}
      className={`${
        props.isActive && `${activeColor} ${activeColorHover}`
      } transition-all`}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
