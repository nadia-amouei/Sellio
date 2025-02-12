import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="header flex flex-row justify-between bg-green-900 text-white">
        <div className='flex flex-row gap-1  p-1 text-xs'> 
          <span className='text-xs'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path fill-rule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clip-rule="evenodd" />
            </svg>
          </span> 
          <span>+001234567</span> 
        </div>

        <div className='flex items-center text-white text-xs'>Get 30% off on your first purchase</div>

        <div className='items-center flex flex-row gap-2 text-xs'>

          <div className='flex flex-row gap-1 text-white items-center'>
            <span className='items-center'>Eng</span> 
            <span className='text-xs items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>

          <div className='flex flex-row gap-1 text-white items-center'>
            <span>Location</span> 
            <span className='text-xs items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

      </div>
      
      <div className='flex flex-col gap-3 text-green-950 px-20 py-5'>
          
          <section className='flex flex-row  justify-end gap-4 cursor-pointer'>
            
              <a href="/" className='flex flex-row items-center '>
                <span>
                  <img src="/assets/images/sellio-48.png" alt="Sellio Logo" />
                </span>
                <span className='text-green-900 text-2xl font-bold'>Sellio</span>
              </a>

              <section className='flex flex-row items-center font-bold'>
                <span>Categories</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </span>
              </section>

              <section className="flex items-center ml-auto bg-gray-200 focus-within:bg-gray-300 rounded-full px-2 py-1 m-2 w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                  </svg>
                </button>
              </section>

              <section className='flex flex-row '>
                <div className='flex flex-row items-center hover:text-gray-900 cursor-pointer font-bold'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                      <path fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>Login / Sign up</span>
                </div>

                <div className='flex flex-row items-center hidden hover:text-gray-900 cursor-pointer'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                  </span>
                  <span>Account</span>
                </div>
              </section>

          </section>
      </div>
    
    </>
  );
}



export default Header;