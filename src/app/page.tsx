import Image from "next/image";
import { Button } from "./_components/button";
import HomeHeroSection from "./_components/home/home";
import { CourseSummery } from "@/types/course-summary-interface";
import { CourseCardList } from "./(courses)/_components/course-card-list";


async function  getNewstCourses(count:number):Promise<CourseSummery[]> {
  const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}` , {
    next:{
      revalidate:20,

    }
  })
  return res.json();

}
export default async function Home() {
  const newestCourses = await getNewstCourses(4);
  return (
    <>
   <HomeHeroSection/>

    <section className="container pt-2">
      <div className="text-center xl:text-right">
        <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی </h2>
        <p>برای به روز ماندن یادگرفتن نکته های تازه ضروری است!</p>
      </div>

      <CourseCardList courses = {newestCourses} />
    </section>
   
    

    </>
  );
}


// types: 

// extends data models interface 
