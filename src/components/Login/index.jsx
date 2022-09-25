import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Login() {
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
                alt='Sample image'
              />
            </div>
            <div className='xl:ml-20 lg:w-[35%] md:w-8/12 mb-12 md:mb-0 bg-[#f2f2f2] rounded-lg p-6 shadow-sm'>
              <form>
                <p className='mb-4 text-3xl font-bold text-center text-titleColor'>
                  Login
                </p>
                <p className='mb-4 text-sm font-semibold text-center text-titleColor'>
                  Welcome back to the {''}
                  <span className='font-bold text-brightRed'>
                    invoicing app
                  </span>
                </p>
                <div className='mb-6'>
                  <input
                    type='text'
                    className='block w-full px-3 py-3 m-0 text-sm text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Email address'
                  />
                </div>

                <div className='mb-6'>
                  <input
                    type='password'
                    className='block w-full px-3 py-3 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleFormControlInput2'
                    placeholder='Password'
                  />
                </div>

                <div className='flex items-center justify-between mb-6'>
                  <div className='form-group form-check'>
                    <input
                      type='checkbox'
                      className='float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none'
                      id='exampleCheck2'
                    />
                    <label
                      className='inline-block text-gray-800 form-check-label'
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
                  <Link to='/home'>
                    {' '}
                    <button
                      type='button'
                      className='inline-block py-3 text-sm font-bold leading-snug uppercase transition duration-150 ease-in-out border rounded shadow-md px-7 hover:bg-brightRed border-brightRed text-brightRed hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                    >
                      Login
                    </button>
                  </Link>

                  <p className='pt-1 mt-2 mb-0 text-sm font-semibold'>
                    Don't have an account?
                    <Link
                      to='/signup'
                      className='ml-2 transition duration-200 ease-in-out text-brightRed hover:text-red-700 focus:text-red-700'
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
