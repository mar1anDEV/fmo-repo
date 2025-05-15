
import React, { useState, useCallback, useRef,useEffect } from 'react';
import btnMenu from '../assets/images/mobile-menu-icon.svg'
import { FaLeaf, FaSearch, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import "../assets/type.css";
import TravelNav from '../Components/Header Components/TravelFlyingNav'
import AtAirport from './Header Components/AtAirport';
import BusinessCorporate from './Header Components/BusinessCorporate';
import Aviation from './Header Components/Aviation';
import GreenAirport from './Header Components/GreenAirport';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);
 
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);
  
 
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  
  const metaMenuLinks = [
    { name: 'DE', path: '#', isLanguage: true, isActive: true, hasBorder: true},
    { name: 'EN', path: 'en/', isLanguage: true, isActive: false, hasBorder: true },
    { name: 'NL', path: 'nl/', isLanguage: true, isActive: false, hasBorder: false },
  ];
  
  const [activeLanguage, setActiveLanguage] = useState(
    metaMenuLinks.find(language => language.isLanguage)?.name || ''
  );
  
  
  const handleLanguageChange = useCallback((language) => {
    setActiveLanguage(language);
    
  }, []);
  
  const menuNavLinks = [
    { name: 'Anreise & Fliegen', path: 'https://www.fmo.de/flugplan-ziele/' },
    { name: 'Am Flughafen', path: 'https://www.fmo.de/check-in-gepaeck/' },
    { name: 'Unternehmen & Business', path: 'https://www.fmo.de/unternehmen/' },
    { name: 'Aviation', path: 'https://www.fmo.de/aviation/informationen-entgeltordnungen/' },
    { 
      name: 'Green Airport', 
      path: 'https://www.fmo.de/klimaschutz-massnahmen/', 
      style: { color: '#4BB699' }, 
      icon: <FaLeaf className="mr-1" /> 
    },
  ];

  const [activeMenuNavLinks, setActiveMenuNavLinks] = useState(null)
  
  const mouseHoverEnter = (index) => {
    setActiveMenuNavLinks(index)
  }
  
  const mouseHoverLeave = () => {
    setActiveMenuNavLinks(null)
  }

  const socialLinks = [
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/fmo_airport',
      icon: <FaInstagram className="mr-1 text-2xl text-[#002844]" />
    },
    {
      name: 'Facebook Link',
      path: 'https://www.facebook.com/FlughafenFMO',
      icon: <FaFacebook className="mr-1 text-2xl text-[#002844]" />
    },
    {
      name: 'YouTube Link',
      path: 'https://www.youtube.com/@flughafenfmo',
      icon: <FaYoutube className="mr-1 text-2xl text-[#002844]" />
    },
    {
      name: 'LinkedIn Link',
      path: 'https://de.linkedin.com/company/muenster-osnabrueck-international-airport',
      icon: <FaLinkedin className="mr-1 text-2xl text-[#002844]" />
    }
  ];
  
  const footerlinks = [
    {linkName: "EASY PARK", hisPath:'https://parking.fmo.de/iPCP/admin/'},
    {linkName: "Imprint", hisPath: 'https://www.fmo.de/en/imprint/'},
    {linkName: "Contact", hisPath: 'https://www.fmo.de/en/contact/'},
    {linkName: "Privacy Policy", hisPath: 'https://www.fmo.de/en/privacy-policy/'}
  ];
  
  
  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    
  }, []);
  
  return (
   <>
    <header className="fmo--nav bg-[#FFFFFF] w-full h-auto py-4 lg:py-2 z-50 relative" style={{ fontFamily: 'Aeroport, sans-serif' }}>
      <div className="container max-w-[1200px] mx-auto">
        
        <div className="flex mx-auto items-center container--nav--wrapper justify-between">
          
          <div className="lg:min-h-[120px] px-4 flex items-center">
            <a href="https://www.fmo.de">
              <img src={logo} alt="FMO Flughafen Münster/Osnabrück Logo" className='h-[35px] md:h-[40px] lg:h-[45px]'/>
            </a>
          </div>
          <div className='meta--form--mainNavLinks--fmo-container scale-95 px-4'>
            
            <div className="hidden xl:flex gap-2.5 relative flex-col items-end">
              
              <div className="flex items-center justify-end">
                <ul className="flex items-center space-x-2 mr-4">
                  <div className='jobs w-10 mr-6 relative'>
                      <a href="https://www.fmo.de/arbeiten-am-fmo/" className='m-auto'>Jobs</a>
                      
                            <div className="absolute flex justify-center align-middle w-4 h-4 bg-red-600 top-[-6px] right-[-5px] rounded-full">
                                <span className='text-white font-[100] text-[10px]'>5</span>
                            </div>
                         
                  </div>
                  {metaMenuLinks.map((link, index) => (
                    <li key={index} id={link.isJobs ? 'j-active' : undefined}>
                      <a 
                        href={link.path} 
                        id={link.isLanguage && link.isActive ? 'active' : undefined}
                        className={`text-md language-link ${link.isLanguage && link.isActive || link.hasBorder ? 'font-medium pr-2 has-border text-[#002844]' : ''}`}
                        style={{ color: '#00284480'}}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <form className="relative" onSubmit={handleSearchSubmit}>
                  <input 
                    type="text" 
                    placeholder="Suchen..." 
                    aria-label="Suchen"
                    className="py-1 pl-3 pr-10 text-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-32 lg:w-50"
                  />
                  <button 
                    type="submit" 
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-700"
                    aria-label="Suche starten"
                  >
                    <FaSearch size={14} />
                  </button>
                </form>
              </div>
              <ul className='nav--link--container--wrapper-desktop mt-1 flex gap-2.5 items-center justify-end'>
                {menuNavLinks.map((navLink, navLinkIndex) => (
                  <li key={`nav-link-${navLinkIndex}`} onMouseEnter={() => mouseHoverEnter(navLinkIndex)} onMouseLeave={mouseHoverLeave} className="inline-block scale-90 relative">
                  <a href={navLink.path} className="nav-link-container">
                    <span
                      className="text-base lg:text-lg font-medium inline-flex items-center"
                      style={{ color: '#002844', ...(navLink.style || {}) }}
                    >
                      {navLink.icon && navLink.icon}
                      {navLink.name}
                    </span>
                  </a>
                  
                  
                  
                    <div className='absolute'>
                    <span>{activeMenuNavLinks === 0 && navLinkIndex === 0 && <TravelNav key="travel-nav" />}</span>
                    </div>
                    <div className='absolute bg-white '>
                    <span>{activeMenuNavLinks === 1 && navLinkIndex === 1 && <AtAirport key="at-airport" />}</span>
                    </div>
                    <div className='absolute bg-white '> 
                    <span>{activeMenuNavLinks === 2 && navLinkIndex === 2 && <BusinessCorporate key="business" />}</span>
                    </div>
                    <div className='absolute bg-white '>
                    <span>{activeMenuNavLinks === 3 && navLinkIndex === 3 && <Aviation key="aviation" />}</span>
                    </div>
                    <div className='absolute bg-white'>
                    
                    {activeMenuNavLinks === 4 && navLinkIndex === 4 && <GreenAirport key="green-airport" />}
                  
                    </div>
                  
                </li>
                ))}
              </ul>
            </div>
            <div className="toggleNav xl:hidden">
              <button onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls='xs--sm--md--devices-nav'>
                <div className='btn--nav--image--wrapper'>
                  <img src={btnMenu} alt="Toggle Menu"/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>


      {isMenuOpen ? (
      
          <div 
          className="fixed inset-0 z-40 transition-opacity duration-300"
          onClick={closeMenu}
          id='overlay-active' 
        ></div>
      ) : null}


      <nav id='xs--sm--md--devices-nav hidden' className={`nab--mobile--tablet absolute bg-white py-4 flex flex-col justify-between w-5/6 xl:hidden top-0 left-0 z-50 transform transition-transform duration-500 min-h-[100dvh] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className='nab--mobile--tablet-navTop overflow-y-auto grow'>
          <ul className='nab--mobile--tablet-navTop--inner pl-4 flex flex-col'>
            {menuNavLinks.map((navLink, navLinkIndex) => (
              <li key={navLinkIndex} className="inline-flex items-center break-words justify-between">
                <a href={navLink.path} className="nav-link-container py-2 w-full">
                  <span
                    className="font-bold text-xl inline-flex items-center"
                    style={{ color: '#002844', ...(navLink.style || {}) }}
                  >
                    {navLink.icon && navLink.icon}
                    {navLink.name}
                  </span>
                </a>
                <div className="nav-item flex p-3 items-center">
                  <svg className="w-6 h-6 ml-auto text-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 17.5l5-5.5-5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        
        <div className='nab--mobile--tablet-navBottom container grow justify-end gap-2.5 mt-auto px-6 flex flex-col'>
          <div className="nab--mobile--tablet-navBottom-search-wrapper w-full">
            <form className="relative" onSubmit={handleSearchSubmit}>
              <input type="text" className='text-base py-2 pl-3 pr-10 w-full border outline-0 border-[#002844]' />
              <button 
                type="submit" 
                className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-[#002844] hover:text-blue-700"
                aria-label="Suche starten"
              >
                <FaSearch size={14} />
              </button>
            </form>
          </div>
          <ul className="flex items-center space-x-2 mr-4">
            <div className='jobs w-10 mr-6 relative'>
              <a href="https://www.fmo.de/arbeiten-am-fmo/" className='m-auto'>Jobs</a>
              <div className="absolute flex justify-center align-middle w-4 h-4 bg-red-600 top-[-6px] right-[-5px] rounded-full">
                <span className='text-white font-[100] text-[10px]'>5</span>
              </div>
            </div>

            {metaMenuLinks.map((link, index) => (
              <li key={index} id={link.isJobs ? 'j-active' : undefined}>
                <a 
                  href={link.path} 
                  id={link.isLanguage && link.isActive ? 'active' : undefined}
                  className={`text-md hover:text-blue-700 ${link.isLanguage  && link.isActive || link.hasBorder ? 'font-medium pr-2 has-border text-[#002844]' : ''}`}
                  style={{ color: '#00284480' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="social-links flex items-center space-x-2 mr-4">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${item.name}`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer--wrapper">
            <div className="footer-container mb-2.5">
              <ul className='block columns-2'>
                {footerlinks.map((link,index)=>(
                  <li key={index} className='block'>
                    <a href={link.hisPath}>
                      <span className='text-[#575757] font-thin'>{link.linkName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
   </>
  );
}

export default Header;