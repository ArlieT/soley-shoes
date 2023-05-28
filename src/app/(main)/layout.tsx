"use client";
import '../../app/globals.css'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isTokenExpired } from "../../../service/tokenServices";
import {Nunito} from 'next/font/google'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers';
import NavBar from "@/components/NavBar";
import Modal from '@/components/modals/Modal';
import SessionWrapper from '../Sessionwrapper';


const nonito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // useEffect(() => {
  //   isTokenExpired(router);
  // }, [router]);




  
  return (
    <html lang="en">
      <body className={nonito.className}>
        {/* mui */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SessionWrapper>
          <Modal onClose={()=>{}} onSubmit={()=>{}} disabled={false} footer='' secondaryAction={()=>{}} isOpen={false} title='Log in or sign up' body={'Welcome to Airbnb'}  actionLabel='Continue' secondaryLabel='Google'/>
          <NavBar/>
           {children}
           </SessionWrapper>
        </LocalizationProvider>
        </body>
    </html>
  );
}
