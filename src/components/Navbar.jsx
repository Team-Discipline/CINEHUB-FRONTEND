import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-antique-white p-4 text-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <img src="/logo.png" alt="CINEHUB Logo" className="h-8 w-auto" /> {/* 로고 이미지 */}
                </Link>
                <ul className="flex space-x-8 text-lg">
                    <li className="relative group">
                        <Link href="/site">
                            <span className="group-hover:text-gray-100 group-hover:bg-gray-500 transition-colors duration-300 px-2 py-1 rounded-lg">
                                사이트 소개
                            </span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/actor">
                            <span className="group-hover:text-gray-100 group-hover:bg-gray-500 transition-colors duration-300 px-2 py-1 rounded-lg">
                                배우 게시판
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* 우측 메뉴 */}
            <div className="flex items-center space-x-4">
                {/* 검색 아이콘 */}
                <FaSearch className="hover:text-gray-500 text-gray-800 transition-transform transform hover:scale-125 duration-300 cursor-pointer" />
                {/* 로그인, 마이페이지 */}
                <ul className="flex space-x-8 text-lg">
                    <li className="relative group">
                        <Link href="/login">
                            <span className="group-hover:text-gray-100 group-hover:bg-gray-500 transition-colors duration-300 px-2 py-1 rounded-lg">
                                로그인
                            </span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/mypage">
                            <span className="group-hover:text-gray-100 group-hover:bg-gray-500 transition-colors duration-300 px-2 py-1 rounded-lg">
                                마이 페이지
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
