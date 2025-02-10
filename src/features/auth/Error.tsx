"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Error = () => {
  const { toast } = useToast();
  useEffect(() => {
    if (window) {
      const queryString = window.location.search;

      const searchParams = new URLSearchParams(queryString);
      const message = searchParams.get("message");
      if (message) {
        toast({ title: message || undefined });
      }
    }
  }, [toast]);

  return null;
};

export default Error;
