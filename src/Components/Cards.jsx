import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Copy } from 'lucide-react';


const Cards= () => {


    const cards = [
    
        {
          id: 1,
          cardTitle: 'Parken',
          cardClass: 'w-1/3',
          cardTitleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
          cardDescription: 'Noch bequemer starten - buchen Sie jetzt Ihren Parkplatz online! Wählen Sie einfach den für Sie passenden Stellplatz aus und buchen Sie bequem von zuhause aus.',
          cardDescriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
          images: {
            default: 'https://www.fmo.de//fileadmin/Content/Home/parken.png',
            xs: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_cb660fd6f2.png',
            sm: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_3c4c7e661f.png',
            md: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_fbade92fa4.png',
            lg: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_3aa6d33d05.png',
            xl: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_83f10b14fe.png',
            xxl: 'https://www.fmo.de//fileadmin/_processed_/a/d/csm_parken_83f10b14fe.png'
          },
          alt: 'Parken'
        },
  {
    id: 2,
    cardTitle: 'Check-In',
    cardClass: 'w-1/3',
    cardTitleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
    cardDescription: 'Damit Ihr Aufenthalt am FMO und die Zeit vor dem Abflug so entspannt wie möglich ist: Hier finden Sie alle Infos zu den Themen "Check-In und Gepäck".',
    cardDescriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
    images: {
      default: 'https://www.fmo.de//fileadmin/Content/Home/check-in.png',
      xs: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_1be6e0da2d.png',
      sm: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_3de4b71911.png',
      md: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_61e96383cf.png',
      lg: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_c0204e7fd6.png',
      xl: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_01052e44b4.png',
      xxl: 'https://www.fmo.de//fileadmin/_processed_/2/0/csm_check-in_01052e44b4.png'
    },
    alt: 'Check-in'
  },
        {
          id: 3,
          cardTitle: 'Einreisebestimmungen Vereinigtes Königreich',
          cardClass: 'w-1/3',
          cardTitleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
          cardDescription: 'Ab dem 02.04.2025 benötigen Reisende für die Einreise in das Vereinigte Königreich nicht nur einen Reisepass, sondern auch eine elektronische Einreisegenehmigung (ETA).',
          cardDescriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
          images: {
            default: 'https://www.fmo.de//fileadmin/user_upload/london.jpg',
            xs: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_8fd35edca1.jpg',
            sm: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_b4d1209d13.jpg',
            md: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_41910f9871.jpg',
            lg: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_0e12560b54.jpg',
            xl: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_29c87acae0.jpg',
            xxl: 'https://www.fmo.de//fileadmin/_processed_/a/9/csm_london_29c87acae0.jpg'
          },
          alt: 'London'
        }
      ]
    return (
        <div className='container py-2 mt-7 lg:mt-0 cursor-pointer sm:px-4 md:px-0 sm:mx-auto'>

          <header className='mb-6'>
            <h2 className='text-2xl text-[#002844]'>Informationen zu Ihrer Reise</h2>
          </header>
            <div className='cards-wrapper w-full gap-5.5 h-auto grid md:grid-cols-2 lg:grid-cols-3'>
            {cards.map((cardObj,cardIndex)=>(
         <div key={cardIndex} className='bg-white transition duration-300 shadow-xl hover:shadow-2xl w-full md:max-w-[330px] lg:max-w-[365px] h-auto'>
            <div className='image-wrapper'>
                <picture className="w-full h-full block">
          <source srcSet={cardObj.images.xxl} media="(min-width: 2560px)" />
          <source srcSet={cardObj.images.xl} media="(min-width: 1200px)" />
          <source srcSet={cardObj.images.lg} media="(min-width: 992px)" />
          <source srcSet={cardObj.images.md} media="(min-width: 769px)" />
          <source srcSet={cardObj.images.sm} media="(min-width: 576px)" />
          <source srcSet={cardObj.images.xs}/>
          <img 
            src={cardObj.images.default} 
            alt={cardObj.alt}
            className="w-full h-full object-cover"
          />
        </picture>
                </div>
                <div className='card-body'>
                    <div className="card-header mb-3"><h1 className='text-[#002844] text-xl'>{cardObj.cardTitle}</h1></div>
                    <div className="card-description mb-3">
                        <p className='text-md text-[#575757]'>{cardObj.cardDescription}</p>
                    </div>
                    <div className='card-info-btn flex gap-1 align-middle'><span className='text-[#575757] text-sm'>weiterlesen</span> 
                    <FaArrowRight  className='my-auto'/>
                    </div>
                </div>
            </div>
        ))}
            </div>
        </div>
    );
};

export default Cards;