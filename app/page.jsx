"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push("/profile");
  }, []);

  return <div>Redirecting...</div>;
}

export default MyComponent;
