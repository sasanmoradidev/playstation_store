"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";
export async function getServerSideProps({ params }) {
    const { profile } = params;
    return {
        props: {
            profile
        }
    }
}

function Profile(props) {
    const { profile } = props.params;
    const { query } = useRouter();
    return (
        <>
            {console.log(query)}
            <Head>
                <title>{profile}</title>
            </Head>
            <div>{profile} profile page is</div>
            <div>{JSON.stringify(query)}</div>
        </>)
}

export default Profile;