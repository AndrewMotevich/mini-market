"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import LoginComponent from "../../components/adminPanel/login/Login";

const AdminAuthPage = ({ session }: { session: Session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <LoginComponent />
      </SessionProvider>
    </>
  );
};

export default AdminAuthPage;
