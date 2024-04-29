const PageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-5xl m-auto px-4">{children}</div>;
};

export default PageWrapper;
