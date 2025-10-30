export default function Picture({ images, loading }) {

    if (!images) return;
    if (loading) return;

    const frontShiny = images.front_shiny;
    const frontDefault = images.front_default;

    return (
        <div>
            <img src={frontDefault} alt="Default Pokemon" />
            <img src={frontShiny} alt="Shiny Pokemon" />
        </div>
    )
}
