// "use client"

import Head from "next/head";
export async function fetchdata() {
    const data = await fetch('https://api.slingacademy.com/v1/sample-data/users/1')
    const jsonData = await data.json();
    console.log(jsonData);
    return {
        jsonData
    }
}

async function Profile(props) {
    const { profile } = props.params;
    const {phone,email, street} = (await fetchdata()).jsonData.user;
    // console.log(data);
    return (
        <>
            <title>{profile}</title>
            <div>{profile} profile page</div>
            <p>{JSON.stringify(props)}</p>
            <p>{JSON.stringify(email)}</p>
        </>)
}

export default Profile;