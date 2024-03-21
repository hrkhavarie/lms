import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Figtree } from "next/font/google";
 import localFont from 'next/font/local'

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
    <html lang="fa" dir="rtl" className={`${iranyekanx.variable} ${figtree.variable}`}>

      <body>
        <header>
          
          <h1 className="text-3xl">
          
            دوره معماری ری اکت
            </h1>

        </header>
        {children}</body>
    </html>
  );
}
