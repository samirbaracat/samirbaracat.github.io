import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoInstagram, BiLogoTwitter, BiMoon, BiPhone, BiSun } from 'react-icons/bi';
import image from '../assets/images/me.jpg';

const HeaderLeft = ({darkMode, toggleDarkMode}) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 
    dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">

        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="" className='w-32 rounded-full' />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Samir <span className='font-semibold'>Baracat</span>
            </h1>
            <h3 className="text-xl font-light">Desenvolvedor Full Stack</h3>
          </div>

          <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
            {
              darkMode ? (
                <BiSun className='text-2xl' /> 
              ) : (
                <BiMoon className='text-2xl' />
              )
            }
          </button>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <ul className="space-y-3">
            <li className='flex items-center gap-2'>
              <BiCurrentLocation className='text-xl' />
              <span>Cuiabá, MT</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiEnvelope className='text-xl' />
              <span>samirbaracat@gmail.com</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiPhone className='text-xl' />
              <span>(65) 99216-6951</span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>SOCIAL</h1>
          <ul className="space-y-3">
            <li className='flex items-center gap-2'>
              <BiLogoGithub className='text-xl' />
              <span>@samirbaracat</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiLogoTwitter className='text-xl' />
              <span>@BaracatSamir</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiLogoInstagram className='text-xl' />
              <span>@baracatsamir</span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>FORMAÇÃO</h1>
          <ul>
            <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
            before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
            before:bg-black dark:before:bg-white before:transform'>
              <div className="flex flex-wrap gap-3">
                <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Pós-Graduação</span>
              </div>
              <span className='font-semibold md:text-lg'>Engenharia de Software com Ênfase em Qualidade e Teste de Software</span>
              <span className='font-light'>Faculdade VINCIT</span>
              <span className='text-sm text-gray-400'>2022</span>
            </li>

            <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
            before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
            before:bg-black dark:before:bg-white before:transform'>
              <div className="flex flex-wrap gap-3">
                <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Pós-Graduação</span>
              </div>
              <span className='font-semibold md:text-lg'>Redes de Computadores e Segurança</span>
              <span className='font-light'>Faculdade VINCIT</span>
              <span className='text-sm text-gray-400'>2022</span>
            </li>

            <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
            before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
            before:bg-black dark:before:bg-white before:transform'>
              <div className="flex flex-wrap gap-3">
                <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Pós-Graduação</span>
              </div>
              <span className='font-semibold md:text-lg'>Full Stack Java Developer</span>
              <span className='font-light'>Faculdade Eficaz</span>
              <span className='text-sm text-gray-400'>2022</span>
            </li>

            <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
            before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
            before:bg-black dark:before:bg-white before:transform'>
              <div className="flex flex-wrap gap-3">
                <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Pós-Graduação</span>
              </div>
              <span className='font-semibold md:text-lg'>Gestão de Tecnologia da Informação</span>
              <span className='font-light'>Faculdade Única</span>
              <span className='text-sm text-gray-400'>2018-2020</span>
            </li>

            <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
            before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
            before:bg-black dark:before:bg-white before:transform'>
              <div className="flex flex-wrap gap-3">
                <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Graduação</span>
              </div>
              <span className='font-semibold md:text-lg'>Tecnologia em Redes de Computadores</span>
              <span className='font-light'>CEFET-MT</span>
              <span className='text-sm text-gray-400'>2006-2008</span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
          <h1 className='text-base font-semibold md:text-2xl'>TECNOLOGIAS</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Java</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Spring Boot</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>JPA</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Restful</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Thymeleaf</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>HTML</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>CSS</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>TailwindCSS</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Javascript</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Typescript</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>React</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Next.js</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>React Native</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Node.js</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Docker</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Banco de Dados</span>
              <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>Github</span>
              {/* <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Java</span>
              <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Spring Boot</span>
              <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Hibernate</span>
              <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>JPA</span>               */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeaderLeft