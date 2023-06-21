"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
// import { useRouter } from 'next/router';

export async function getServerSideProps() {
    const datapexels = axios(
        'https://6492cbf0428c3d2035d0b3b8.mockapi.io/api/v3/users'
        // {
        //     headers:{
        //         authorization: process.env.API_KEY_PEXELS
        //     }
        // }
        );
        return {
            props: {
                test: 'name',
                imagedata: datapexels,

            }
        }
}
export default function About(props) {
    const imagedata = props;
    // const router = useRouter();
    // console.log(router);
    // const query = useSearchParams();
    // for (const [key, value] of query.entries()) {
    //     console.log(`${key} = ${value}`);
    // }
    console.log('log');
    return (
        <>
        {console.log('log')}
            <h1>About us2</h1>
            <p>{JSON.stringify(imagedata)}</p>
            {/* <button type='button' onClick={router.push()}>button</button> */}
        </>
    )
}