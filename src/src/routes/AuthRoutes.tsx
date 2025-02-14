import { SignedIn, SignedOut } from "@clerk/react-router";
import { Outlet } from "react-router";
export default function ProtectedRoutes() {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut></SignedOut>
    </>
  );
}
