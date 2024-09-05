import React from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";

const Page = () => {
  return (
    <div>
      <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
        <form className='flex flex-col justify-center gap-4 min-w-[350px]'>
          <h1 className='text-4xl text-deep-slate-blue'>LOGIN</h1>

          <Input
            id='email'
            label='Email'
            disabled={false}
          />

          <Input
            id='password'
            label='Password'
            disabled={false}
          />

          <Button
            label='Login'
          />
        </form>
      </section>
    </div>
  );
};

export default Page;