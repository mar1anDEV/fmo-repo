import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Copy } from 'lucide-react';
function Footer() {
    const textToCopy = "Flughafen Münster/Osnabrück (FMO) Airportallee 1 48268 Greven";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log("Kopiert: ", textToCopy);
        }).catch(err => {
            console.error("Nicht kopiert: ", err);
        });
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
          path: 'www.linkedin.com/fmo',
          icon: <FaLinkedin className="mr-1 text-2xl text-[#002844]" />
        }
      ];
  return (
    <footer className="max-w-full py-2 md:pt-0 footer-fmo h-auto">
        <div className="container md:px-4 md:max-w-[768px] lg:max-w-[1200px] h-auto mx-auto">
            <div className="footer-top md:pt-11 md:pb-8">
                <div className="flex flex-wrap w-full">
                    <div className="footer-nl px-5 grow">
                        <label htmlFor="news-letter" className="text-[#002844] text-md font-bold mb-4 block">
                            DER FMO-NEWSLETTER
                        </label>

                        <form action="">
                            <input type="text" className="block py-2.5 px-5 w-full bg-white outline-0" placeholder="Ihre E-mail-Adresse" name="" id=""/>
                            <input type="submit" className="cursor-pointer w-full md:w-fit mb-2.5 py-3 px-8 block mt-2.5 text-white transition-colors duration-200 font-extrabold bg-[#4bb699] hover:bg-[#5fa090]" value="Abonnieren"/>
                        </form>
                    </div>
                    <div className="footer-adress px-5">
                        <div className="footer-adress container">
                            <h1 className="text-[#002844] block text-md lg:uppercase font-bold mb-4">Anfahrtsadresse</h1>
                            <p className="text-[#575757] block text-md">Flughafen Münster/</p>
                            <p className="text-[#575757] block text-md">Osnabrück (FMO)</p>
                            <p className="text-[#575757] block text-md">Airportallee 1</p>
                            <p className="text-[#575757] block text-md">48268 Greven</p>
                            <div className="copy-btn space-x-2.5 cursor-pointer"

                            onClick={copyToClipboard}>
                            <Copy size={24} className="inline-block" color="#75A2FF" />
                            <span className="inline-block text-[#75A2FF] text-md">Adresse kopieren</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-media px-5 hidden lg:block">
                        <div className="footer-social-media container">
                        <h1 className="text-[#002844] block text-md  lg:uppercase font-bold mb-4">Social Media</h1>
                            <div className="footer-social-media-links">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.path} target="_blank" rel="noopener noreferrer" className="flex mt-2 gap-2 justify-start items-center text-[#002844] hover:text-[#4bb699] transition-colors duration-200">
                                        {link.icon}
                                        <span className="text-[#575757] transition-colors duration-200 hover:text-[#75A2FF] text-md">{link.path}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle"></div>
            <div className="footer-bottom"></div>
            <div className="footer-bottom-copyright"></div>
        </div>
    </footer>
  )
}

export default Footer