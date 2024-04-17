'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

 const menuItems: NaviagationMenuItems[] = [

     {
         title: 'صفحه اصلی' , href: '/'
     } ,
     {
        title: 'دوره های آموزشی' , href: '/courses'
    } ,
    {
        title: 'مقالات' , href: '/blog'
    } ,
]
 const TopNavigation: React.FC = ()=>{
    const pathname = usePathname();
    return(
        <ul className="flex justify-between gap-x-5 mr-12">
            {
                menuItems.map(item=>{
                    const isActive = pathname === item.href;
                    return(
                        <li key={item.href}>
                        <Link href={item.href}
                        className={`dark:hover:text-primary transition-colors pb-2 ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30' } `}>
                            {item.title}
                        </Link>
                    </li>
                        )
 })
            }
        </ul>
    )
}
export default TopNavigation;