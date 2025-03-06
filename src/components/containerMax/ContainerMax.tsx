import { cn } from "@/lib";
import React from "react";

const ContainerMax = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`${cn("container-max", className)}`}>{children}</div>;
};

export default ContainerMax;
