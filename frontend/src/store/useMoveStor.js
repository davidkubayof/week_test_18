import { create } from "zustand";

export const useMoveStor = create((set) => ({
    movies: [],
    isLoading: false,
    searchQuery: "",
    seatSelection: {},
    setMove: (movies) => set({ movies }),
    setLoading: (value) => set({ isLoading: value }),
    setSearchQuery: (value) => set({ searchQuery: value }),
    selectSeat: (movieid, seatNumber) => {
        set((state) => ({
            seatSelection: {
                ...state.seatSelection,
                [movieid]: seatNumber
            }
        }))
    }
}));