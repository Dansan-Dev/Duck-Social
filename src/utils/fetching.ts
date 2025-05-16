export async function fetchProfile(setName: any) {
    try {
        const resp = await fetch('http://localhost:8080/api/1')
        const data = await resp.json()
        setName(data.name)
    } catch (error) {
        console.error('Fetch error:', error);
    }
}