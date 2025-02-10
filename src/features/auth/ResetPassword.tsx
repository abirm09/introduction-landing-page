"use client";

import { CommonModal } from "@/components";
import { Button, Input } from "@/components/ui";
import { useState } from "react";

const ResetPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-end">
      <Button type="button" variant={"link"} onClick={handleOpen}>
        Forget password
      </Button>
      <CommonModal
        handleOpen={handleOpen}
        open={open}
        modalTitle="Reset password"
      >
        <form action="/api/forget-password" className="space-y-5" method="post">
          <Input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
          />
          <Button>Reset password</Button>
        </form>
      </CommonModal>
    </div>
  );
};

export default ResetPassword;
