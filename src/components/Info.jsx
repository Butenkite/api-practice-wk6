export default function Info({ pokeData }) {
    // Safe logging: pokeData may be undefined on initial render
    console.log(pokeData?.name)

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