import { Link } from 'react-router-dom'
import { HiMiniBars3 } from 'react-icons/hi2'
import { LiaTimesSolid } from 'react-icons/lia'
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'

export default function Navbar() {

    const { navshown, generalDispatch } = useGeneralAppContext()

    function showNav(){
        generalDispatch({
            type: 'setNavBarShownTrue'
        })
    }
    
    function hideNav(){
        generalDispatch({
            type: 'setNavBarShownFalse'
        })
    }

    return (
        <header className="bg-hajj-black text-[#ECFEFE] sticky top-0 z-[50] h-[63px] border-y border-[#464647] w-full">
            <div className='relative z-50 mx-auto flex h-full w-full flex-row items-center pr-4 sm:pr-16 lg:pr-20'>
                <div className="flex h-full w-[48px] flex-none items-center justify-center border-r border-[#464647] sm:w-[64px] lg:w-[80px]">
                    <div className="relative h-[26px] w-[26px] sm:h-[2rem] sm:w-[2rem]">
                        <Link to='/'>
                            <img 
                                alt="HAJJ"
                                loading="lazy"
                                src="logo.svg"
                            />
                        </Link>
                    </div>
                </div>
                <div className='ml-3 flex flex-row items-center space-x-[15px] sm:ml-[20px] lg:ml-8'>
                    <div>
                        <Link to='/' className='font-redHat text-[20px] font-medium leading-none sm:text-[1.5rem]'>    
                            <p>HAJJ</p>
                        </Link>
                    </div>
                </div>
                <div className='flex-1'></div>
                <nav className='hidden font-manrope flex-row items-center space-x-[24px] pl-[1.5rem] lg:mr-[2.5rem] lg:flex xl:mr-[60px]'>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        About
                    </Link>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        Ecosystem
                    </Link>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        Fund
                    </Link>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        Blog
                    </Link>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        Docs
                    </Link>
                    <Link to='/' className='text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]'>
                        Whitepaper
                    </Link>
                </nav>
                <div className='flex flex-row items-center gap-4 font-redHat'>
                    <Link to='/' className='hidden md:block'>
                        <button className='relative text-[14px] font-serif leading-[14px] font-[500] tracking-[0.01em] rounded-[6px] h-[40px] uppercase px-[32px] py-[13px] cursor-pointer user-select-none text-white border-white border hover:bg-white hover:text-[#000000] disabled:!text-white disabled:!bg-transparent transition-color duration-150 ease-in '>
                            SHELL
                        </button>
                    </Link>
                    <Link to='/' className='hidden md:block'>
                        <button className='relative text-[14px] font-serif leading-[14px] font-[500] tracking-[0.01em] rounded-[6px] h-[40px] uppercase px-[32px] py-[13px] cursor-pointer user-select-none text-white border-white border hover:bg-white hover:text-[#000000] disabled:!text-white disabled:!bg-transparent transition-color duration-150 ease-in '>
                            WALLET
                        </button>
                    </Link>
                    <div className='block pl-2 leading-[0] lg:hidden'>
                        {navshown ?
                        <button onClick={hideNav} className='cursor-pointer leading-[0] md:text-[2.3rem]  text-[2rem] h-[1.5rem] w-[1.5rem] sm:h-[30px] sm:w-[30px]'>
                            <LiaTimesSolid />
                        </button> : 
                        <button onClick={showNav} className='cursor-pointer leading-[0] md:text-[2.3rem]  text-[2rem] h-[1.5rem] w-[1.5rem] sm:h-[30px] sm:w-[30px]'>
                            <HiMiniBars3 />
                        </button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
