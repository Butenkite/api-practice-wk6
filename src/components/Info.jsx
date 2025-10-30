export default function Info({ pokeData }) {


    if (!pokeData) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }

    return (
        <>
            <p>{pokeData.name}</p>
            <p>{pokeData.id}</p>
        </>
    )
}