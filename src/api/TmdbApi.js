import AxiosClient from "./AxiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const TmdbApi = {
    getMoviesList: (type, params)=>{
        const url = 'movie/' + movieType[type];
        return AxiosClient.get(url, params);
    },
    getTvList: (type, params)=>{
        const url = 'tv/' + tvType[type];
        return AxiosClient.get(url, params);
    },
    search: (whichCategory, params)=>{
        const url = 'search/' + category[whichCategory];
        return AxiosClient.get(url, params);
    },
    getVideos: (whichCategory, id) =>{
        const url = category[whichCategory] + '/' + id + '/videos';
        return AxiosClient.get(url, {params: {}});
    },
    details: (whichCategory, id, param) =>{
        const url = category[whichCategory] + '/' + id;
        return AxiosClient.get(url, param);
    }
}

export default TmdbApi;