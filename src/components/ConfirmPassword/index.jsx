import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmPassword() {
  return (
    <>
      <section className='h-screen'>
        <div className='flex flex-col items-center content-center justify-center w-full h-full px-4 text-gray-800 bg-white lg:px-16'>
          <div className='flex items-start w-full '>
            <img
              src='/src/assets/exuus.webp'
              className='w-[60px] h-full object-cover object-center'
              alt='logo'
            />
          </div>

          <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-[80%] g-2 w-full'>
            <div className='mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0'>
              <img
                src='/src/assets/invoice.svg'
                className='hidden w-full xl:block'
                alt='logo'
              />
            </div>
            <div className='xl:ml-20 lg:w-[35%] h-fit md:w-8/12 mb-12 md:mb-0 bg-[#f2f2f2] rounded-lg p-6 shadow-sm'>
              <form>
                <p className='mb-8 text-3xl font-bold text-center text-titleColor'>
                  Confirm Code
                </p>

                <div className='mb-6'>
                  <input
                    type='password'
                    className='block w-full px-3 py-3 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Input code'
                  />
                </div>

                <div className='flex items-center justify-between mb-6'>
                  <a href='#!' className='text-gray-800'>
                    This code will expire in 3mins!
                  </a>
                </div>

                <div className='flex items-center justify-start text-center lg:text-left'>
                  <Link
                    to='/'
                    className='mr-4 transition duration-200 ease-in-out text-titleColor hover:text-red-700 focus:text-red-700'
                  >
                    <button
                      type='button'
                      className='inline-block py-2 text-sm font-bold leading-snug text-white uppercase transition duration-150 ease-in-out border rounded shadow-md px-7 bg-brightRed border-brightRed hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
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
                    className='inline-block py-3 text-sm font-bold leading-snug uppercase transition duration-150 ease-in-out border rounded shadow-md px-7 hover:bg-brightRed border-brightRed text-brightRed hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                  >
                    Confirm Code
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
