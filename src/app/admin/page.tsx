"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import LoginComponent from "../../components/adminPanel/login/Login";

const AdminAuthPage = ({ session }: { session: any }) => {
  return (
    <>
      <SessionProvider session={session}>
        <LoginComponent />
      </SessionProvider>
    </>
  );
};

export default AdminAuthPage;
