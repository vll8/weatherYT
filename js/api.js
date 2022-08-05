export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8332f48478b93842c49116f5930f315&lang=ru&units=metric`);

        return await response.json();
    } catch (error) {
        console.error(error);
    }
    
    
}