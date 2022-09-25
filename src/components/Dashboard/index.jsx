import React from 'react';
import Sidebar from './sidebar';
import '../../style/style.css';
import InvoiceModal from '../Modal';

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* <Sidebar /> */}
      <div className='flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50'>
        <aside className='hidden w-1/5 py-10 pl-10 bg-white border-r min-w-min border-indigo-900/20 md:block'>
          <div className='flex items-center justify-start w-full '>
            <img
              src='/src/assets/exuus.webp'
              className='w-[80px] h-full object-cover object-center'
              alt='logo'
            />
          </div>
          <div className='flex flex-col mt-12 font-medium text-gray-900 space-y-7'>
            <a
              className='flex items-center py-1 space-x-2 group hover:border-r-2 hover:border-r-[#FF6363] hover:font-semibold'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                ></path>
              </svg>
              <span className='text-gray-900'>Dashboard</span>
            </a>
            <a
              className='flex items-center py-1 pr-20 space-x-2 font-semibold border-r-2 border-r-[#FF6363]'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
              <span className='text-gray-900'>Invoices</span>
            </a>
            <a
              className='flex items-center py-1 space-x-2 group hover:border-r-2 hover:border-r-[#FF6363] hover:font-semibold'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z'
                ></path>
              </svg>
              <span className='text-gray-900'>Expenses</span>
            </a>
            <a
              className='flex items-center py-1 space-x-2 group hover:border-r-2 hover:border-r-[#FF6363] hover:font-semibold'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                ></path>
              </svg>
              <span className='text-gray-900'>Banking</span>
            </a>
            <a
              className='flex items-center py-1 space-x-2 group hover:border-r-2 hover:border-r-[#FF6363] hover:font-semibold'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                ></path>
              </svg>
              <span className='text-gray-900'>Cards</span>
            </a>
            <a
              className='flex items-center py-1 space-x-2 group hover:border-r-2 hover:border-r-[#FF6363] hover:font-semibold'
              href='#'
            >
              <svg
                className='w-5 h-5 group-hover:stroke-[#FF6363] text-gray-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                ></path>

                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                ></path>
              </svg>
              <span className='text-gray-900'>Settings</span>
            </a>
          </div>
        </aside>

        <main className='w-full px-3 py-10 bg-[#f2f2f2] sm:px-10'>
          <nav className='flex items-center content-center justify-between text-lg'>
            <div className='flex items-center space-x-4 text-xl font-semibold text-gray-800'>
              <a href='#'>
                <span className='md:hidden'>
                  <svg
                    className='w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4 6h16M4 12h16M4 18h7'
                    ></path>
                  </svg>
                </span>
              </a>
              <span>Invoices</span>
            </div>

            <div className='flex items-center content-center space-x-5 text-base text-gray-500 md:space-x-10'>
              <a
                className='flex items-center px-4 py-2 space-x-3 rounded-md hover:bg-indigo-100'
                href='#'
              >
                <span>
                  <svg
                    className='w-5 h-5 text-gray-900 '
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    ></path>

                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                </span>
                <span className='hidden text-gray-900 sm:block '>
                  Preferences
                </span>
              </a>
              <a
                className='flex items-center px-4 py-2 space-x-2 text-blue-500 bg-indigo-100 rounded-md hover:bg-indigo-200'
                href='#'
              >
                <svg
                  className='w-5 h-5 fill-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <div
                  className='hidden xs:block'
                  onClick={() => setOpen(true)}
                  open={open}
                >
                  <span className='hidden sm:inline-block'>Create</span> New Invoice
                </div>
              </a>
              <a className href='#'>
                <img
                  className='object-cover object-top w-10 h-10 border-2 border-indigo-200 rounded-full hover:border-indigo-300'
                  src='/src/assets/man.jpg'
                  alt
                  srcset
                />
              </a>
            </div>
          </nav>
          {/* ALL INVOICES  */}
          <section>
            <div class='bg-[#fff] mt-12 rounded-xl px-5 sm:px-10 pt-8 pb-4 relative  '>
              <div class='text-lg font-semibold text-[#FF6363]'>
                All Invoices
              </div>

              <div class='grid grid-cols-1 mt-6 xs:grid-cols-2 gap-y-6 gap-x-6 md:flex md:space-x-6 md:gap-x-0 '>
                <div class='flex flex-col space-y-2 text-sm font-semibold text-gray-600 md:w-40'>
                  <label for='client'>Begin Date</label>
                  <div class='relative inline-flex'>
                    <div class='flex items-center justify-center w-11/12'>
                      <div
                        className='relative mb-3 datepicker form-floating xl:w-96'
                        data-mdb-toggle-button='false'
                      >
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Select a date'
                          data-mdb-toggle='datepicker'
                        />
                      </div>
                    </div>
                    {/* <input
                      class='w-full py-3 pl-4 pr-10 tracking-wider text-white rounded-lg outline-none appearance-none bg-indigo-800/80 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300'
                      id='client'
                      name='client'
                      type='text'
                      value='2019/02/28'
                    />

                    <span class='absolute top-0 right-0 m-3 text-white pointer-events-none'>
                      <svg
                        class='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        ></path>
                      </svg>
                    </span> */}
                  </div>
                </div>

                <div class='flex flex-col space-y-2 text-sm font-semibold text-gray-600 md:w-40'>
                  <label for='client'>End Date</label>
                  <div class='relative inline-flex'>
                    <input
                      class='w-full py-3 pl-4 pr-10 tracking-wider text-white rounded-lg outline-none appearance-none bg-gray-800/50'
                      id='client'
                      name='client'
                      type='text'
                      value='2019/12/09'
                    />

                    <span class='absolute top-0 right-0 m-3 text-white pointer-events-none'>
                      <svg
                        class='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class='flex flex-col space-y-2 text-sm font-semibold text-gray-600 md:w-40'>
                  <label for='client'>Status</label>
                  <div class='relative inline-flex'>
                    <select
                      class='w-full px-4 py-3 text-white rounded-lg outline-none appearance-none bg-[#FF6363]'
                      id='client'
                      name='client'
                    >
                      <option value='Pending'>Pending</option>
                      <option value='Paid'>Paid</option>
                      <option value='Drafted'>Drafted</option>
                    </select>
                    <span class='absolute top-0 right-0 m-3 text-white pointer-events-none'>
                      <svg
                        class='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class='flex flex-col space-y-2 text-sm font-semibold text-gray-600 md:w-40'>
                  <label for='client'>Client</label>
                  <div class='relative inline-flex'>
                    <select
                      class='w-full px-4 py-3 text-white rounded-lg outline-none appearance-none bg-blue-600/70'
                      id='client'
                      name='client'
                    >
                      <option value='John Doe'>John Doe</option>
                      <option value='Michael Ralf'>Michael Ralf</option>
                      <option value='Kabika P'>Kabika P</option>
                    </select>
                    <span class='absolute top-0 right-0 m-3 text-white pointer-events-none'>
                      <svg
                        class='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class='mt-5 text-sm text-gray-500'>
                * Please make sure all the fields are filled before creating an
                invoice
              </div>
            </div>
          </section>

          <section className=''>
            <div className='flex items-center px-10 py-4 mt-10 text-sm font-semibold text-gray-600 bg-white invoice-table-row invoice-table-header rounded-xl gap-x-3'>
              <div className='text-left'>Invoice</div>
              <div className='text-left'>Client name</div>
              <div className='text-center'>Date</div>
              <div className='text-center'>Due date</div>
              <div className='text-right'>Total</div>
              <div className='flex-1 text-center'>Status</div>
            </div>

            <div className='mt-5 overflow-x-auto text-sm text-gray-500 bg-white divide-y shadow rounded-xl divide-indigo-50'>
              <div className='flex items-center px-10 py-4 invoice-table-row gap-x-3'>
                <div className='text-left'>12</div>
                <div className='text-left'>John Doe</div>
                <div className='text-center'>2019/11/20</div>
                <div className='text-center'>2019/12/20</div>
                <div className='text-right'>$10.00</div>
                <div className='text-center'>
                  <span className='px-4 py-1 text-white rounded-lg bg-[#FF6363]'>
                    Pending
                  </span>
                </div>
              </div>

              <div className='flex items-center px-10 py-4 invoice-table-row gap-x-3'>
                <div className='text-left'>13</div>
                <div className='text-left'>Thomas Bride</div>
                <div className='text-center'>2019/11/20</div>
                <div className='text-center'>2019/12/20</div>
                <div className='text-right'>$670.00</div>
                <div className='text-center'>
                  <span className='px-4 py-1 text-white bg-green-600 rounded-lg'>
                    Paid
                  </span>
                </div>
              </div>

              <div className='flex items-center px-10 py-4 invoice-table-row gap-x-3'>
                <div className='text-left'>14</div>
                <div className='text-left'>Ellen Bean</div>
                <div className='text-center'>2019/11/20</div>
                <div className='text-center'>2019/12/20</div>
                <div className='text-right'>$1032.00</div>
                <div className='text-center'>
                  <span className='px-4 py-1 text-white rounded-lg bg-[#FF6363]'>
                    Pending
                  </span>
                </div>
              </div>

              <div className='flex items-center px-10 py-4 invoice-table-row gap-x-3 '>
                <div className='text-left'>15</div>
                <div className='text-left'>Jack Sanders</div>
                <div className='text-center'>2020/11/20</div>
                <div className='text-center'>2020/12/20</div>
                <div className='text-right'>$590.00</div>
                <div className='text-center'>
                  <span className='px-4 py-1 text-white bg-green-600 rounded-lg'>
                    Paid
                  </span>
                </div>
              </div>

              <div className='flex items-center px-10 py-4 invoice-table-row gap-x-3'>
                <div className='text-left'>16</div>
                <div className='text-left'>Leslie Ive</div>
                <div className='text-center'>2020/11/20</div>
                <div className='text-center'>2020/12/20</div>
                <div className='text-right'>$230.00</div>
                <div className='text-center'>
                  <span className='px-4 py-1 text-white rounded-lg bg-[#FF6363]'>
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </section>
          <InvoiceModal open={open} setOpen={setOpen} />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
