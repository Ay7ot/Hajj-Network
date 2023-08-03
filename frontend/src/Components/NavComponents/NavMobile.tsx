import { useGeneralAppContext } from "../../functions/useGeneralAppContext"
import { Link } from 'react-router-dom'
import { BsDiscord, BsTwitter, BsGithub, BsTelegram } from 'react-icons/bs'
export default function NavMobile() {
    const { navshown } = useGeneralAppContext()

    return (
        <div className="lg:hidden">
            <div className={`${navshown ? 'fixed right-0 top-[62px] z-[45] h-[calc(100vh-62px)] w-full  sm:w-[468px] transform-gpu transition-transform duration-200 will-change-transform translate-y-[0px] ease-in-out sm:translate-x-[0px]' : 'fixed right-0 top-[62px] z-[45] h-[calc(100vh-62px)] w-full sm:w-[48px] transform-gpu transition-transform duration-200 will-change-transform translate-y-[100%] ease-out sm:translate-x-[100%] sm:translate-y-[0%]'}`}>
                <div className="bg-hajj-black z-50 h-full px-[20px] py-8 sm:py-10 sm:pl-10 sm:pr-16 border-hajj-border overflow-y-auto sm:border-1">
                    <div className="text-white font-manrope mb-[60px] flex flex-col items-start space-y-[16px] sm:mb-[80px]">
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            About
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Fund
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Ecosystem
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Developers
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Blog
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Docs
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Brand Assets
                        </Link>
                        <Link to='/' className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]">
                            Whitepaper
                        </Link>
                        <Link to='/'>
                            <button className="relative text-black text-[14px] font-serif leading-[14px] font-[500] tracking-[0.01em] rounded-[6px] h-[40px] uppercase px-[32px] py-[13px] cursor-pointer user-select-none text-haqq-black bg-white border-white border hover:bg-transparent hover:text-white disabled:!bg-white disabled:!text-haqq-black transition-color duration-150 ease-in will-change-[color,background] block md:hidden">
                                Shell
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className="relative text-black text-[14px] font-serif leading-[14px] font-[500] tracking-[0.01em] rounded-[6px] h-[40px] uppercase px-[32px] py-[13px] cursor-pointer user-select-none text-haqq-black bg-white border-white border hover:bg-transparent hover:text-white disabled:!bg-white disabled:!text-haqq-black transition-color duration-150 ease-in will-change-[color,background] block md:hidden">
                                Wallet
                            </button>
                        </Link>
                    </div>
                    <div className="font-manrope mb-[60px] grid grid-cols-2 gap-[14px] sm:mb-[80px] sm:gap-[18px]">
                        <div>
                            <a className="group inline-flex flex-initial flex-row items-center space-x-2 text-[12px] leading-[20px] text-white/50 transition-colors duration-100 hover:text-white sm:text-[13px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                                <div className="text-[1.3rem]">
                                    <BsDiscord />
                                </div>
                                <p>Discord</p>
                            </a>
                        </div>
                        <div>
                            <a className="group inline-flex flex-initial flex-row items-center space-x-2 text-[12px] leading-[20px] text-white/50 transition-colors duration-100 hover:text-white sm:text-[13px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                                <div className="text-[1.3rem]">
                                    <BsGithub />
                                </div>
                                <p>Github</p>
                            </a>
                        </div>
                        <div>
                            <a className="group inline-flex flex-initial flex-row items-center space-x-2 text-[12px] leading-[20px] text-white/50 transition-colors duration-100 hover:text-white sm:text-[13px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                                <div className="text-[1.3rem]">
                                    <BsTwitter />
                                </div>
                                <p>Twitter</p>
                            </a>
                        </div>
                        <div>
                            <a className="group inline-flex flex-initial flex-row items-center space-x-2 text-[12px] leading-[20px] text-white/50 transition-colors duration-100 hover:text-white sm:text-[13px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                                <div className="text-[1.3rem]">
                                    <BsTelegram />
                                </div>
                                <p>Telegram</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-manrope text-white text-[16px] font-[500] leading-[1.2em] sm:text-[18px] lg:text-[22px] mb-[16px] sm:mb-[24px]">Sign up for HAJJ updates</h3>
                        <form autoComplete="off" className="flex flex-col space-y-[40px]">
                            <div className="max-w-[400px] sm:flex-1">
                                <div className="inline-block w-full">
                                    <div className="relative">
                                        <input 
                                            className="inline-block w-full text-white placeholder-white/25 rounded-[6px] bg-[#252528] leading-[20px] outline-none border border-[#252528] focus:bg-transparent focus:border-white/50 focus:text-white transition-colors duration-150 ease-in will-change-[color,background] text-[13px] pt-[10px] pb-[8px] px-[14px]"
                                            placeholder="Enter your e-mail"
                                            required
                                            name="email"
                                        />
                                        <span className="absolute right-[16px] select-none pointer-events-none text-[#EC5728] top-[14px]">*</span>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[24px] sm:mt-0 lg:mt-[40px]">
                                <button className="relative text-[14px] font-manrope leading-[14px] font-[500] tracking-[0.01em] rounded-[6px] h-[40px] uppercase px-[32px] py-[13px] cursor-pointer user-select-none text-white border-white border hover:bg-white hover:text-black disabled:!text-white disabled:!bg-transparent transition-color duration-150 ease-in will-change-[color,background]" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {navshown && 
                <div className="fixed right-0 top-[0] z-40 h-full bg-black/80"></div>
            }
        </div>
    )
}
