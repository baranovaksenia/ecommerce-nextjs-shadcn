"use client";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  // const storeModal = useStoreModal();
  const onOpen = useStoreModal(state => state.onOpen);
  const isOpen = useStoreModal(state => state.isOpen);

  // if user do not have any store - he should first create a store (can not close the modal)
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div></div>;
};

export default SetupPage;
