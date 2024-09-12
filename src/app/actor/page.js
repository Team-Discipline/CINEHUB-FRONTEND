'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ActorRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        birth: '',
        height: '',
        weight: '',
        content: '',
        sns: '',
        file: null, // 파일 null 초기화
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'file') {
            setFormData({
                ...formData,
                file: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('gender', formData.gender);
        data.append('birth', formData.birth);
        data.append('height', formData.height);
        data.append('weight', formData.weight);
        data.append('content', formData.content);
        data.append('sns', formData.sns);
        data.append('file', formData.file);

        try {
            // 나중에 axios.post URL 수정할 것
            const response = await axios.post('https://서버주소를.넣을것.이다', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Actor registered:', response.data);
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    // Form 부분
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>배우 등록</h2>
                {/* NAME */}
                <label style={styles.label}>
                    이름
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        style={styles.input}
                        required
                    />
                </label>
                {/* GENDER */}
                <div style={styles.genderContainer}>
                    <span style={styles.label}>성별</span>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        남성
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        여성
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                        />
                        기타
                    </label>
                </div>
                {/* BIRTH */}
                <label style={styles.label}>
                    생일
                    <input
                        type="date"
                        name="birth"
                        value={formData.birth}
                        onChange={handleChange}
                        placeholder="Birth"
                        style={styles.input}
                        required
                    />
                </label>
                {/* HEIGHT */}
                <label style={styles.label}>
                    키 (cm)
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        placeholder="Height"
                        style={styles.input}
                        required
                    />
                </label>
                {/* WEIGHT */}
                <label style={styles.label}>
                    몸무게 (kg)
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="Weight"
                        style={styles.input}
                    />
                </label>
                {/* SNS */}
                <label style={styles.label}>
                    SNS
                    <input
                        type="text"
                        name="sns"
                        value={formData.sns}
                        onChange={handleChange}
                        placeholder="SNS"
                        style={styles.input}
                    />
                </label>
                {/* FILE UPLOAD */}
                <label style={styles.label}>
                    프로필 사진
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        accept="image/*" // 파일 유형 image로 제한
                        style={styles.input}
                    />
                </label>
                <button type="submit" style={styles.button}>등록</button>
            </form>
        </div>
    );
};

export default ActorRegistrationForm;

// CSS 스타일링
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // 화면 전체에서 중앙에 배치
        backgroundColor: 'bg-antique-white',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        width: '400px',
    },
    input: {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        width: '100%',
    },
    genderContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    label: {
        marginBottom: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
};
