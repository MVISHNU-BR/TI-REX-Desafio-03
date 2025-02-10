import { Link, useLocation } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithSeparator() {
  const location = useLocation();
  const pathName = location.pathname;
  const getPageName = (pathName: string) => {
    switch (pathName) {
      case "/components":
        return "Components";
      case "/shop":
        return "Shop";
      case "/aboult":
        return "Aboult";
      case "/contact":
        return "contact";
      case "/cart":
        return "Cart";
      case "/checkout":
        return "Checkout";
      default:
        return "Unknown"; // Página desconhecida
    }
  };

  const currentPageName = getPageName(pathName);

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
}
