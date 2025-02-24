"use client";

import { authFirebase } from "@/app/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    signOut(authFirebase)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <></>;
}
