import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from 'next/font/local'
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";


const figtree = Figtree({
  display:'swap' , 
  subsets:['latin'] ,
  weight:['300' , '400','500' , '600', '700' , '800' , '900'] , 
  variable:'--font-figtree'
})


const iranyekanx = localFont({
  src:[
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanXVF.woff',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanXVF.woff2',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanX-Light.woff',
      weight:'300',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanX-Light.woff2',
      weight:'300',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanX-Regular.woff',
      weight:'400',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanX-Regular.woff2',
      weight:'400',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanX-Medium.woff',
      weight:'500',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanX-Medium.woff2',
      weight:'500',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanX-Bold.woff',
      weight:'700',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanX-Bold.woff2',
      weight:'700',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff/IRANYekanX-ExtraBold.woff',
      weight:'900',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranyekanx/woff2/IRANYekanX-ExtraBold.woff2',
      weight:'900',
      style:'normal',
    },
  ] , 
  variable:'--font-iranyekanx'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`dark ${iranyekanx.variable} ${figtree.variable}`}>
{/*  */}
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-fold uppercase dark:bg-base-100
       dark:text-base-content">
        
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
