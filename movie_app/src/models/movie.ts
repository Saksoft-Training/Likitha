export interface Movie {
    cast?: string[];
    description: string;
    director?: string;
    duration?: string;
    genres?: string[];
    id?: number;
    languages?: string;
    poster?: string;
    rating?: string | number;
    releaseDate: string;
    status?: string;
    title: string;
}