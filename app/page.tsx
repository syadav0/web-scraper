import Image from 'next/image'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      
      

      <div className='text-center flex flex-col items-center justify-center'>
        <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-300'/>
        <h1 className='text-2xl text-black/50 font-bold'>
          Welcome to the Web Scraper
        </h1>
      </div>
    </div>
  );
}
