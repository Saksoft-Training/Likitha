export interface Movie {
    id?: number;
    title: string;
    description: string;
    releaseDate: string;
    languages?: string;
    genres?: string;
    duration?: string;
    director?: string;
    cast?: string[];
    status?: string;
    poster?: string;
    rating?: string | number;
}