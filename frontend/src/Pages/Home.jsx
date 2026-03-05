import { useEffect } from "react";
import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import { useMoveStor } from "../store/useMoveStor";
import { getMoves } from "../api/api.move";

export default function Home() {
    const { movies, isLoading, searchQuery, setLoading, setMove } = useMoveStor()

    useEffect(() => {
        async function loadMovie() {
            try {
                setLoading(true);
                const data = await getMoves()
                setMove(data)
            } catch (error) {

            }
        } loadMovie();
    }, [])
    const filtered = movies.filter((obj) =>
        (obj.title + obj.genres.join(" "))
            .toLowerCase()
    )
    // if(isLoading) return <p>loading...</p>
    

    return (
        <>
        <Header />
            <div>
                <h1></h1>
                <div>
                    {filtered.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />)
                    )}
                </div>
            </div>
            {/* 

            <hr />
            <div className='bg-[#f3f4f6] max-h-full h-300 grid grid-cols-4 gap-6 p-4'>
                { Array.isArray(movies) &&
                    movies.map((element) => {
                        return (
                            <div className="border h-100 w-70 " >
                                <MovieCard element={element} />
                            </div>)
                    })}
            </div> */}
        </>
    )
}
