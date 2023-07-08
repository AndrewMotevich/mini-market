"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import LoginComponent from "../../components/adminPanel/login/Login";
import { Session } from "next-auth";
import type { AppProps } from "next/app";

const AdminAuthPage = ({
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <LoginComponent />
      </SessionProvider>
    </>
  );
};

export default AdminAuthPage;
