import { useEffect, useState } from 'react';
import Link from 'next/link';
import style from './ProfileComponent.module.css'

export default function ProfilComponent(user ) {


    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1></h1>
            <p>{user.personal_data?.first_name}</p>
            <p>{user.personal_data?.last_name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>
                <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                    
                </Link>
            </p>
        </div>
    );
}