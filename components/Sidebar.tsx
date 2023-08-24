import { DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Sidebar() {
  return (
    <div className='p-2 md:p-10 py-6 overflow-y-auto border-b-[2px] border-indigo-300'>
      <div className='flex flex-col items-center'>
        <DocumentMagnifyingGlassIcon className='w-24 h-24 text-indigo-300' />
        <h1 className='hidden md:inline text-xl text-center font-bold'>
          Web Scraper
        </h1>
      </div>
      
      <ul>

      </ul>

    </div>
  )
}
