import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const TestComponent = () => {
  const { data } = useSession();

  return (
    <div>
      {data?.user ? <div>{data.user.name}</div> : ""}
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
};

export default TestComponent;
