import { api_url } from "../configuration/env";

export const fetchGetFriends = async () => {

    const response = await fetch(api_url+"/friend/list",  {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
		throw new Error(`HTTP error status: ${response.status}`);
	}

    const data = await response.json();
    return data;

}