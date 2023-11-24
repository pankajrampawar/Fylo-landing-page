import React from 'react';
import logo from './images/logo.svg';
import illustration1 from './images/illustration-1.svg';
import illustration2 from './images/illustration-2.svg';
import arrow from './images/icon-arrow.svg';
import quote from './images/icon-quotes.svg';
import avatar from './images/avatar-testimonial.jpg';
import phone from './images/icon-phone.svg';
import mail from './images/icon-email.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import bgCurve1 from './images/bg-curve-mobile.svg';
import bgCurve2 from './images/bg-curve-desktop.svg';

function App() {

  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  // function 
  const handleClick = ()=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(regex.test(email));
  }

  const handleChange = (e) =>{
    setEmail(e.target.value);
  }

  return (
    <div className="">
      {/* Navigator bar */}
        <div className='flex justify-between pt-8 px-8 items-center sm:pt-16 sm:px-16'> 
          <div>
            <img src={logo} alt='fylo logo' className='w-32 sm:w-auto'/>
          </div>

          <div className='flex gap-6 text-DB'>
            <span>Features</span>
            <span>Team</span>
            <span>Sign In</span>
          </div>
        </div>

      {/* Frist Card Intro Component*/}
        <div className='flex flex-col gap-6 mt-28 px-10 sm:flex-row sm:items-center'>
          <div className='sm:order-2'><img src={illustration1} alt='illustration 1' /></div>
          <div className='flex flex-col gap-6 sm:order-1'>
            <header className='text-4xl text-center text-VDB  ralewayB'>All your files in one secure location, accessible anywhere.</header>
            <p className='text-base text-DB text-center openSans'>Fylo stores your most important file in one secure location. Access wherever you need, share and collaborate with friends, family and co-workers.</p>
            <div className='flex flex-col mx-6 gap-2 sm:flex-row sm:items-start'>
              <div className='sm:w-2/3 relative'>
              <input 
                type='email' 
                id='email' 
                placeholder='Enter your email...' 
                className=' rounded-md p-3 border w-full'
                onChange={handleChange}  
                value = {email}
                style={{borderColor: isValid ? 'inherit' : 'red'}}
              />
              {!isValid && <span className='text-red-400 openSans'>Please check your email</span>}
              </div>
              <button className='bg-BB text-white ralewayS p-3 rounded-md sm:w-1/3 hover:bg-blue-400' onClick={handleClick}>Get Started</button>
            </div>
          </div>
        </div>

        {/*second Card Detail Component */}
        <img src={bgCurve2} className='mt-44 hidden sm:block'/>
        <img src={bgCurve1} className='mt-24 sm:hidden w-full' />
        <div className='px-10 flex flex-col gap-4 sm:flex-row sm:items-center bg-[#f8f8fe] pb-24'>
          <div className='sm:order-2'>
            <img src={illustration2} alt='illustration 2' />
          </div>
          
          <div className='flex flex-col items-center gap-8 sm:order-1'>
            <div className='flex flex-col mt-6 gap-6 items-center' > 
              <header className="text-center text-2xl ralewayB">Stay productive, wherever you are</header>
              <p className='text-md text-DB'>Never let location be an isuue when accessing your files. Fylo has you covered for all your file storage needs</p>
              <p className='text-md text-DB'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required! </p>
              <span className='text-MC flex items-center gap-2 underline underline-offset-8 cursor-pointer'>See how Fylo works <img src={arrow} alt='arrow' /></span>
            </div>

            <div className='block w-4/5  bg-white shadow-lg rounded-md p-4'>
              <img src={quote} alt='quote icon' />
              <p className='text-sm text-DB mt-1'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become well-oiled collaboration machine.</p>
              <div className="flex mt-6 gap-4 items-center">
                <img src={avatar} alt='avatar' className='w-12 rounded-full'/>
                <div className='flex flex-col'>
                  <span className='text-sm text-VDB ralewayB'>Kylie Burton</span> 
                  <span className='text-xs openSans text-DB' >Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*Third Card End Component*/}
        <div className="bg-DB flex flex-col gap-8 py-10 px-8 sm:flex-row sm:items-center sm:justify-evenly sm:gap-0">
          <div className="flex  flex-col gap-6 sm:w-1/3">
            <header className='text-2xl text-white ralewayS text-center sm:text-left'>Get early access today</header>
            <p className='text-white text-center openSans text-sm sm:text-left'>It only takes a minute to sign up and our free starter tier is extremly generous. If you have any questions, our support team would be happy to help you.</p>
          </div>
          
          <div className='flex flex-col mx-16 gap-2 mb-6 sm:w-1/3'>
            <input  
              className="p-2 rounded sm:w-full" 
              type='email' 
              placeholder='Enter your email...' 
              id='email'
              value={email}
              onChange={handleChange}
              style={{borderColor: isValid ? 'inherit' : 'red'}}
            />
            {!isValid && <div className='text-red-400 openSans'>Please check your email</div>}
            <button className="p-2 rounded bg-BB text-white lg:w-1/2  hover:bg-blue-400" onClick={handleClick}>Get Started For Free</button>
          </div>
        </div>

        {/*Fourth Card Fotter Component */}
        <div className="flex flex-col bg-VDB py-24 text-LG openSans gap-8 px-8 sm:flex-row sm:justify-evenly sm:items-center">
          <div className="sm:pb-24">
            <img src={logo} alt='logo' className='grayscale invert brightness-100'/>
            <span className='flex gap-2 mt-16 items-center sm:mt-6'>
              <img src={phone} alt='phone icon' />
              <span>Phone: +1-543-123-4567</span>
            </span>
            <span className='flex gap-2 mt-2 items-center'>
              <img src={mail} alt='email icon' />
              <span>example@fylo.com</span>
            </span>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='hover:text-DB cursor-pointer'>About Us</span>
            <span className='hover:text-DB cursor-pointer'>Jobs</span>
            <span className='hover:text-DB cursor-pointer'>Press</span>
            <span className='hover:text-DB cursor-pointer'>Blog</span>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='hover:text-DB cursor-pointer'>Contact Us</span>
            <span className='hover:text-DB cursor-pointer'>Terms</span>
            <span className='hover:text-DB cursor-pointer'>Privacy</span>
          </div>

          <div className='flex gap-4 justify-center mt-6'>
            <img src={facebook} alt='facebook icon' className='grayscale brightness-100 invert cursor-pointer hover:grayscale-0' />
            <img src={instagram} alt='instagram icon' className='grayscale brightness-100 invert cursor-pointer hover:grayscale-0' />
            <img src={twitter} alt='twitter icon' className='grayscale brightness-100 invert cursor-pointer hover:grayscale-0' />
          </div>
        </div>
    </div>
  );
}

export default App;
