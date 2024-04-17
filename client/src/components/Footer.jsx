import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
    <div className="">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to='/' className="self-center whitespace-nowrap text-lg 
                        sm:text-xl font-semibold dark:text-white">
                    <span className="px-4 py-2 bg-gradient-to-r from-indigo-500
                        via-purple-500 to-pink-500 rounded-lg text-white">
                        wendy's
                    </span>
                    Blog
                    </Link>
                </div>        
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6">
                <div className='mt-4'>
                    <Footer.Title title='ABOUT' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='https://www.100jsprojects.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            100jsprojects
                        </Footer.Link>

                        <Footer.Link 
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'//stop blocking the link opening on a new window
                        >
                            Wendy's Blog
                        </Footer.Link>                    
                    </Footer.LinkGroup>
                </div>

                <div className='mt-4'>
                    <Footer.Title title='FOLLOW US' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Discord
                        </Footer.Link>

                        <Footer.Link 
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'//stop blocking the link opening on a new window
                        >
                            Github
                        </Footer.Link>                    
                    </Footer.LinkGroup>
                </div>
                
                <div className='mt-4'>
                    <Footer.Title title='LEGAL' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            privacy policy
                        </Footer.Link>

                        <Footer.Link 
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'//stop blocking the link opening on a new window
                        >
                            Terms & Conditions
                        </Footer.Link>                    
                    </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright 
                href='#' 
                by="wendy's blog" 
                year={(new Date()).getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 justify-center">
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsLinkedin} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='https://github.com/lifewithwendy/RAD' icon={BsGithub} />
            </div>
        </div>

    </div>
    
    </Footer>
  )
}
