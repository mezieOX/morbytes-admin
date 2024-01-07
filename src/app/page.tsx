"use client";
import { useState } from "react";

import { Login } from "@/components/common/Login";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="overflow-x-hidden">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
}
