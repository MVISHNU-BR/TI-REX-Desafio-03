import { Link } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbWithSeparatorProps {
  currentPageName?: string;
  pathName?: string;
}

export const BreadcrumbWithSeparator: React.FC<
  BreadcrumbWithSeparatorProps
> = ({ currentPageName, pathName = "/" }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className=" text-base font-medium text-black">
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to={pathName}>{currentPageName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbWithSeparator;
