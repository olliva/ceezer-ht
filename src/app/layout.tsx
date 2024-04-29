import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/providers/index";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ceezer Home Task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getProductsParams());

  return (
    <html lang="en">
      <body className={`${inter.className} font-sans box-border min-w-[688px]`}>
        <Providers>
          <Header />
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="pb-20">
              <PageWrapper>{children}</PageWrapper>
            </div>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
