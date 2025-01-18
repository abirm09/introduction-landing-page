"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const BreadcrumbDashboard = () => {
  const pathNames = usePathname().split("/").filter(Boolean);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <Link
                href={`/${pathNames.slice(0, index + 1).join("/")}`}
                className="capitalize"
              >
                {item.split("-").join(" ")}
              </Link>
            </BreadcrumbItem>
            {index < pathNames.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDashboard;
