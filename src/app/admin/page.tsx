"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import LoginComponent from "../../components/adminPanel/login/Login";
import { Session } from "next-auth";

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
