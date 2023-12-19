"use client";
import { StoreModal } from "@/components/modals/store-modal";
import { useState, useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // if on the server, don't render anything (avoid hydration error)
  if (!isMounted) return null;
  //   on client, render the UI
  return (
    <>
      <StoreModal />
    </>
  );
};
