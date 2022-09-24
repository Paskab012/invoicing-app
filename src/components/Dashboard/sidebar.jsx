import React from 'react';
// import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <div className='sidebar__header'>
          <div className='sidebar__logo'>
            <div className=' w-full flex items-start'>
              <img
                src='/src/assets/exuus.webp'
                className='w-[60px] h-full object-cover object-center'
                alt='logo'
              />
            </div>
          </div>
        </div>

        <div className='sidebar__bottom'>
          <img src='/src/assets/png.png' alt='avatar' width='50' height='50' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
