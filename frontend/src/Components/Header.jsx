export default function Header() {
    
    return (
        <div className="ml-100 flex flex-col gap-3 ">
            <p className="font-bold text-2xl">Movie Night</p>
            <p className="">Search a movie and pick your seats</p>
            <input className="p-6 border rounded-2xl text-gray-500 w-[1000px]  max-w-full h-14 focus:outline-none focus:ring-yellow-400 focus:ring-3 focus:text-black focus:border-none " type="text" placeholder="Search movie by title..." />
            <hr className="w-250 " />
            <p className=" text-gray-500">Showing 7 results</p>
        </div>
    )
}
