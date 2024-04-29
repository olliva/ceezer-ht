export enum TitleSize {
  s = "s",
  l = "l",
}

interface TitleProps extends React.PropsWithChildren {
  size: TitleSize;
}

const Title = (props: TitleProps) => {
  if (props.size === TitleSize.l) {
    return <h1 className="mt-10 mb-6 text-4xl font-bold">{props.children}</h1>;
  }

  return <h3 className="text-m font-bold">{props.children}</h3>;
};

export default Title;
