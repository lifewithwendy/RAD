import { Navbar, Button, TextInput, Avatar, Dropdown } from 'flowbite-react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice.js';
import { signoutSuccess } from '../redux/user/userSlice.js';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);
  const { theme } = useSelector(state => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleSignout = async () => { 
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST'
      });
      const data = await res.json();
      if (!res.ok){
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
      console.log(searchTermFromUrl)
    }
  },[location.search])
  return (
    <Navbar className="border-b-2">       
      <Link to='/' className="self-center whitespace-nowrap text-sm 
      sm:text-xl font-semibold dark:text-white">
        <span className="px-4 py-2 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white">
            wendy's
        </span>
         Blog
      </Link>

      <form onSubmit={ handleSubmit }>
        <TextInput
          type="text"
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color='grey' pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-4 md:order-2">

        <Button 
          className="w-12 h-10 hidden sm:inline" 
          color='gray' 
          pill 
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown
            className=''
            arrowIcon={false}
            inline
            label = {
              <Avatar 
                className='relative self-center cursor-pointer 
                shadow-md overflow-hidden rounded-full'
                alt='user'
                img={currentUser.profilePicture}
                rounded
              />
            }
            >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username }</span>
              <span className='block text-sm font-medium truncate'>@{currentUser.email }</span>
            </Dropdown.Header>
            <Link to='/dashboard?tab=profile'>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={ handleSignout }>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          !(location.pathname === '/sign-in' || location.pathname === '/sign-up') && (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
            </Button>
          </Link>)
          
        )}
        
        {/* Creates the hamburger on smaller screens */}
        <Navbar.Toggle /> 

      </div>

       <Navbar.Collapse>
             {/* as={'div'} eliminates double a tags coming from Link and Navbar.Link */}
            <Link to='/'>
              <Navbar.Link active={path ==="/"} as={'div'}>
                Home
              </Navbar.Link>
            </Link>

            <Link to='/about'>
              <Navbar.Link active={path ==="/about"} as={'div'}>
                      About
              </Navbar.Link>
            </Link>

            <Link to='/projects'>
              <Navbar.Link active={path ==="/projects"} as={'div'}>   
                Project
              </Navbar.Link>
            </Link>
            
        </Navbar.Collapse>
    </Navbar>
  )
}
