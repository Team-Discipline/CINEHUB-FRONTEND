'use client'

import React, { useState } from 'react';
import Link from "next/link";

const MyPage = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [actor, setActor] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  const handleActorChange = (e) => setActor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('이름:', name);
    console.log('소개:', bio);
    console.log('배우:', actor);
    console.log('프로필 이미지:', profileImage);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">마이페이지</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">이름:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="이름을 입력하세요"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">소개:</label>
          <textarea
            value={bio}
            onChange={handleBioChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="소개를 입력하세요"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">프로필 사진:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-600 hover:file:bg-indigo-200"
          />
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-deep-slate-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-terra focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-300 ease-in-out"
        >
          저장
        </button>

        <div className='flex w-full justify-center'>
          <p className='text-gray-400'>
            배우 등록에 관심있으신가요?&nbsp;&nbsp;&nbsp;
          </p>
          {/*클릭하면 로그인창으로 이동*/}
          {/*마우스를 올리면 색이 천천히 변함*/}
          <Link href='/actor' className='text-sage-green hover:text-terra transition-colors duration-500 ease-in-out'>
            배우등록하기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MyPage;
