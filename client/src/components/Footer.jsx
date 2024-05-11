import React from 'react';
import { Footer } from "flowbite-react"; 
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsDribbble } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className=''>
            <Link to="/"
      className="self-center whitespace-nowrap text-sm
      sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
        to-pink-500 rounded-lg text-white"
        >Anas</span>
        Blog
      </Link>
            </div>
            <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                <Footer.Title title='About' className='mt-5'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        Anas Projects
                    </Footer.Link>
                    <Footer.Link>
                        Anas Blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Follow us' className='mt-5'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        Github
                    </Footer.Link>
                    <Footer.Link>
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Legal' className='mt-5'/>
                <Footer.LinkGroup col>
                    <Footer.Link>
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link>
                        Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                
                

            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright
            href='#'
            by='Developed by Anas'
            year={new Date().getFullYear()} />
        
        <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center' >
            <Footer.Icon icon={BsFacebook} />
            <Footer.Icon icon={BsInstagram} />
            <Footer.Icon icon={BsTwitterX} />
            <Footer.Icon icon={BsGithub} />
            <Footer.Icon icon={BsDribbble} />
        </div>
        </div>
      </div>
    </Footer>
  ) 
}

export default FooterComponent
