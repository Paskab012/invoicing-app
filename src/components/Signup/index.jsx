import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
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
              <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-full'>
                <img
                  src='/src/assets/invoice.svg'
                  className='w-full h-full hidden xl:block'
                  alt='Sample image'
                />
              </div>
              <div className='xl:ml-20 lg:w-[35%] h-full md:w-8/12 mb-12 md:mb-0 bg-[#f2f2f2] rounded-lg p-6 shadow-sm'>
                <form>
                  <p className='text-sm font-semibold mb-2 text-titleColor'></p>
                  <p className='text-3xl font-bold text-center mb-8 text-titleColor'>
                    Sign Up
                  </p>
                  <div className='mb-6'>
                    <input
                      type='text'
                      className='form-control block w-full px-3 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      id='exampleFormControlInput2'
                      placeholder='Name'
                    />
                  </div>

                  <div className='mb-6'>
                    <input
                      type='text'
                      className='form-control block w-full px-3 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      id='exampleFormControlInput2'
                      placeholder='Email address'
                    />
                  </div>

                  <div className='mb-6'>
                    <input
                      type='password'
                      className='form-control block w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      id='exampleFormControlInput2'
                      placeholder='Password'
                    />
                  </div>

                  <div className='mb-6'>
                    <input
                      type='password'
                      className='form-control block w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      id='exampleFormControlInput2'
                      placeholder='Confirm Password'
                    />
                  </div>

                  <div className='flex justify-between items-center mb-6'>
                    <div className='form-group form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        id='exampleCheck2'
                      />
                      <label
                        className='form-check-label inline-block text-gray-800'
                        for='exampleCheck2'
                      >
                        Remember me
                      </label>
                    </div>
                    <a href='#!' className='text-gray-800'>
                      Forgot password?
                    </a>
                  </div>

                  <div className='text-center lg:text-left'>
                    <button
                      type='button'
                      className='inline-block px-7 py-3 hover:bg-brightRed border border-brightRed text-brightRed hover:text-white  text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 font-bold active:shadow-lg transition duration-150 ease-in-out'
                    >
                      Sign up
                    </button>
                    <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                      Already have an account?
                      <Link
                        to='/login'
                        className='text-brightRed hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2'
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Signup;
