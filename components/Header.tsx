'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { FormEvent, useRef } from 'react';

export default function Header() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    if (input) {
      inputRef.current.value = '';
    }

    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: input }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <form className='flex items-center space-x-2 justify-center rounded-full py-2 px-4 max-w-md mx-auto bg-indigo-100' onSubmit={handleSubmit}>
        
        <input ref={inputRef} type='text' placeholder='Search' className='bg-transparent flex-1 outline-none text-indigo-400 placeholder:text-indigo-300'/>
        
        <button hidden>Search</button>
        
        <MagnifyingGlassIcon className='w-6 h-6 text-indigo-300' />
      
      </form>
    </header>
  )
}
