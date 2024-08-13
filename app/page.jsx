"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push("/profile");
  });

  return (
    <div className="flex justify-center items-center w-full grow h-[720px]">
      <Image
        src={"/assets/Svgs/loading.svg"}
        width={70}
        height={70}
        alt="loading icon"
      />
    </div>
  );
}

export default MyComponent;
