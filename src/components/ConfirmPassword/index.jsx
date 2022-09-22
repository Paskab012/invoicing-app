import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmPassword() {
  return (
    <>
      <section className='h-screen'>
        <div className='px-4 lg:px-16 h-full text-gray-800 bg-white flex flex-col w-full justify-center items-center content-center'>
          <div className=' w-full flex items-start'>
            <img
              src='/src/assets/exuus.webp'
              className='w-[60px] h-full object-cover object-center'
              alt='logo'
            />
          </div>

          <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-[80%] g-2 w-full'>
            <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
              <img
                src='/src/assets/invoice.svg'
                className='w-full hidden xl:block'
                alt='logo'
              />
            </div>
            <div className='xl:ml-20 lg:w-[35%] h-fit md:w-8/12 mb-12 md:mb-0 bg-[#f2f2f2] rounded-lg p-6 shadow-sm'>
              <form>
                <p className='text-3xl font-bold text-center mb-8 text-titleColor'>
                  Confirm Password
                </p>

                <div className='mb-6'>
                  <input
                    type='password'
                    className='form-control block w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Input code'
                  />
                </div>

                <div className='flex justify-between items-center mb-6'>
                  <a href='#!' className='text-gray-800'>
                    This code will expire in 3mins!
                  </a>
                </div>

                <div className='text-center lg:text-left  flex items-center justify-start'>
                  <Link
                    to='/login'
                    className='text-titleColor hover:text-red-700 focus:text-red-700  transition duration-200 ease-in-out mr-4'
                  >
                    <button
                      type='button'
                      className='inline-block px-7 bg-brightRed py-2  border border-brightRed text-white hover:text-white  text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 font-bold active:shadow-lg transition duration-150 ease-in-out'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='w-6 h-7'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </button>
                  </Link>
                  <button
                    type='button'
                    className='inline-block px-7 py-3 hover:bg-brightRed border border-brightRed text-brightRed hover:text-white  text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 font-bold active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Confirm Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmPassword;
