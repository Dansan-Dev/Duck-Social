export async function fetchProfile(setName: any, id: string) {
    try {
        const resp = await fetch('http://localhost:8080/api/' + id)
        const data = await resp.json()
        setName(data.name)
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function fetchAllProfiles(setProfiles: any) {
    try {
        const resp = await fetch('http://localhost:8080/api')
        const data = await resp.json()
        setProfiles(data.requestProfileDtos)
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function postProfile(name: string) {
    const resp = await fetch(
        `http://localhost:8080/api`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name})
        }
    )

    const isCreated = resp.status===201

    if (!isCreated) {
        throw new Error(`Post status not 201: STATUS-CODE --> ${resp.status}`)
    }
    const data = await resp.json()
    return data;
}