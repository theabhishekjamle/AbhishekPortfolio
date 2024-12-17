import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community <a href="http://"></a></div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://youtube.com/@abhishekjamle" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>    
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://github.com/theabhishekjamle" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>    
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://discord.com/users/theabhishekjamle" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>    
                        </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://instagram.com/iabhishekjamle" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="https://www.linkedin.com/in/abhishek-jamle-86925726b/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors">
                        <a href="mailto:abhishekjamle007@gmail.com" className="flex items-center">
                            <span className="text-[15px] ml-[6px]">abhishekjamle007@gmail.com</span>    
                        </a>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; WebChain Dev 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer