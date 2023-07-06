"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import TestComponent from "../../components/testComponent/testComponent";
import { Session } from "next-auth";

const AdminAuthPage = ({ session }: { session: Session }) => {
  return (
    <div>
      <SessionProvider session={session}>
        <TestComponent />
      </SessionProvider>
    </div>
  );
};

export default AdminAuthPage;
