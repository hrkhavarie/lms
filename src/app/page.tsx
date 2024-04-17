import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <>
    <section className="bg-hero-pattern mt-5 xl:mt-20 xl:bg-left bg-center bg-no-repeat">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
      <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right ">
        <h3 className="text-xl dark:text-info xl:text-2xl text-center xl:text-right ">خوش اومدی به...</h3>
        <h1 className="text-3xl font-black lg:text-5xl xl:text-5xl gradient">مسیر صعودی به قله های برنامه نویسی</h1>
        <p>هر جای مسیر برنامه نویسی، با همراهی استادهای با تجربه کلاسبن می تونی بدون محدودیت به قله های بالاتر صعود کنی، ماهواتو داریم.</p>
        <Image className="grayscale mt-4 opacity-70 m-auto xl:m-0 " src='/assets/images/frameworks.png' alt="" height={39} width={412} />
      </div>
      <Image src='/assets/images/programmer-landing.svg' alt="کلاسبن" height={521} width={702} />
      </div>
    </section>

    <div className="container">
      <Button variant="info" size="large" shape="wide" animatedIcon={true} >ثبت نام</Button>
    </div>

    </>
  );
}


// types: 

// extends data models interface 
