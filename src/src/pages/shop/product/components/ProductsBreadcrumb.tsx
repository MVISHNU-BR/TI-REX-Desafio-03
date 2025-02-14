import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useParams } from "react-router";

export function ProductsBreadcrumb() {
  const params = useParams();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-secondFadeGray">
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-black" />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-secondFadeGray">
            <Link to="/shop">shop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="pr-4 text-black" />
        <div className="border-r-2 border-secondFadeGray h-[37px]"></div>

        <BreadcrumbItem>
          <BreadcrumbPage className="no-underline pl-4">
            {params.slug}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
