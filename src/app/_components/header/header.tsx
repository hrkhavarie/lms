import Link from "next/link"
import TopNavigation from "./top-navigation"
import Image from "next/image"

const Header:React.FC = () => {
  return (
    <header className='border-b dark:border-base-content dark:border-opacity-5'>
        <div className="container mx-auto flex items-center justify-between">
            <span><Link href='/'><Image src={'/assets/images/logo.png'} priority alt="classon" width={100} height={100}/></Link></span>
            <TopNavigation/>
            <span className="mr-auto">user</span>
        </div>
    </header>
  )
}

export default Header