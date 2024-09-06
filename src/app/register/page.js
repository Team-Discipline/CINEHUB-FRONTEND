'use client'

import React from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";
import { motion } from "framer-motion"
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
        <form className='flex flex-col justify-center gap-4 min-w-[350px]'>
          {/*회원가 텍스트가 왼쪽에서 가운데로 스프링처럼 이동*/}
          <motion.div animate={{ x: 85 }} transition={{ type: "spring", stiffness: 120 }}>
            <h1 className='text-4xl text-deep-slate-blue'>
              REGISTER
            </h1>
          </motion.div>

          {/*이메일 입력창*/}
          {/*인풋을 클릭하면 1.1배로 커졌다가 돌아옴*/}
          <motion.div whileTap={{ scale: 1.1 }} >
            <Input
              id='email'
              label='Email'
              disabled={false}
            />
          </motion.div>

          {/*유저네임 입력창*/}
          {/*인풋을 클릭하면 1.1배로 커졌다가 돌아옴*/}
          <motion.div whileTap={{ scale: 1.1 }} >
            <Input
              id='username'
              label='Username'
              disabled={false}
            />
          </motion.div>

          {/*패스워드 입력창*/}
          {/*인풋을 클릭하면 1.1배로 커졌다가 돌아옴*/}
          <motion.div whileTap={{ scale: 1.1 }}>
            <Input
              id='password'
              label='Password'
              type='password'
              disabled={false}
            />
          </motion.div>

          {/*회원가입 버튼*/}
          {/*버튼에 마우스를 올리면 1.1배 커짐*/}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              label='Register'
            />
          </motion.div>

          <div className='flex w-full justify-center'>
            <p className='text-gray-400'>
              이미 회원이신가요?&nbsp;&nbsp;&nbsp;
            </p>
            {/*클릭하면 로그인창으로 이동*/}
            {/*마우스를 올리면 색이 천천히 변함*/}
            <Link href='/login' className='text-sage-green hover:text-terra transition-colors duration-500 ease-in-out'>
              로그인하기
            </Link>
          </div>


        </form>
      </section>
    </div>
  );
};

export default RegisterPage;