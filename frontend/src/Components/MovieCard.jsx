import { Link } from "react-router";

export default function MovieCard({ movie }) {
    return (
        <>
            <Link to={`/movie/${movie.id}`}>
                <div>
                    <img src={movie.posterUrl} width={150} />
                    <p className="">Title {movie.Title}</p>
                    <p>Year {movie.Year}</p>
                    <p>Language {movie.Language}</p>
                </div>
            </Link>
        </>
    )
}
