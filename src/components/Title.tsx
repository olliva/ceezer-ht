const Title = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <h1 className="mt-10 mb-6 text-4xl font-bold">{children}</h1>;
};

export default Title;
