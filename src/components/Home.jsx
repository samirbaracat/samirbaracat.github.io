import { BiLogoJava } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">Sobre</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Desenvolvedor Full Stack com mais de 10 anos de experiência em desenvolvimento de software.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Aperfeiçoamento</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">

            <ul>
              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Full Stack: Desenvolvedor Spring</span>
                <span className='font-light'>TREINAWEB</span>
                <span className='text-sm text-gray-400'>2024</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Desenvolvedor Full Stack Java</span>
                <span className='font-light'>TREINAWEB</span>
                <span className='text-sm text-gray-400'>2023</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Analista de Banco de Dados</span>
                <span className='font-light'>TREINAWEB</span>
                <span className='text-sm text-gray-400'>2023</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Desenvolvedor Especialista Front-End</span>
                <span className='font-light'>TREINAWEB</span>
                <span className='text-sm text-gray-400'>2023</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Desenvolvedor Especialista React e Next.js</span>
                <span className='font-light'>TREINAWEB</span>
                <span className='text-sm text-gray-400'>2023</span>
              </li>
            </ul>

            <ul>
              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Formação Full Stack Javascript</span>
                <span className='font-light'>Formação Full Stack Javascript</span>
                <span className='text-sm text-gray-400'>2022</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Spring Framework Expert</span>
                <span className='font-light'>Algaworks</span>
                <span className='text-sm text-gray-400'>2021</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Formação Java Master Developer</span>
                <span className='font-light'>Softblue</span>
                <span className='text-sm text-gray-400'>2021</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Programador em Java</span>
                <span className='font-light'>SENAI Cuiabá</span>
                <span className='text-sm text-gray-400'>2008</span>
              </li>

              <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
              before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
              before:bg-black dark:before:bg-white before:transform'>
                <span className='font-semibold text-lg'>Programação</span>
                <span className='font-light'>SENAC Cuiabá</span>
                <span className='text-sm text-gray-400'>1999</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="max-w-3xl space-y-8">

          <h1 className="text-2xl font-bold md:text-4xl">Projetos</h1>
          <div className="flex flex-wrap gap-3">
            <span className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full'>Back end</span>
          </div>

          <a href="https://github.com/samirbaracat/spring-actuator" target='_blank' className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-wrap gap-3">
              <BiLogoJava className='text-5xl rounded-full' />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Spring Boot Actuator</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Monitoramento de uma API REST</p>
          </a>

          <a href="https://github.com/samirbaracat/api-openfeign" target='_blank' className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-wrap gap-3">
              <BiLogoJava className='text-5xl rounded-full' />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Spring Cloud OpenFeign</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Consumindo serviços em uma API RESTful</p>
          </a>

        </div>

      </main>
    </div>
  )
}

export default Home