const ApiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cced0a0c869ea68e359c6682cd3b1e86',
    originalImage: (imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default ApiConfig;