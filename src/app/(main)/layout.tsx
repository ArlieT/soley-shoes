"use client";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isTokenExpired } from "../../../service/tokenServices";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import NavBar from "@/components/navbar/NavBar";
import Modal from "@/components/modals/Modal";
import SessionWrapper from "../Sessionwrapper";
import CartModal from "@/components/modals/CartModal";
import { cartModal } from "@/lib/State";

export const metadata = {
  title: "Tehcno project",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   isTokenExpired(router);
  // }, [router]);

  const { isShown, setCartModal } = cartModal();

  return (
    <html lang="en">
      <body>
        {/* mui */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SessionWrapper>
            {isShown && <CartModal />}
            <Modal
              onClose={() => {}}
              onSubmit={() => {}}
              disabled={false}
              footer=""
              secondaryAction={() => {}}
              isOpen={false}
              title="Log in or sign up"
              body={"Welcome to Airbnb"}
              actionLabel="Continue"
              secondaryLabel="Google"
            />
            <NavBar />
            {children}
          </SessionWrapper>
        </LocalizationProvider>
      </body>
    </html>
  );
}
