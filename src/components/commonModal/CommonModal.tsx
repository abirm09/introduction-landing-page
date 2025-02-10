import { cn } from "@/lib/utils";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui";

const CommonModal = ({
  children,
  open,
  handleOpen,
  modalTitle,
  className,
}: {
  children: React.ReactNode;
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOpen: (open: boolean) => void;
  modalTitle?: string;
  className?: string;
}) => {
  return (
    <Dialog onOpenChange={handleOpen} open={open}>
      <DialogContent className={`${cn("", className)}`}>
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;
