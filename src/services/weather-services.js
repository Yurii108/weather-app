import { useHttp } from "../hooks/http.hook";


export const useWeatherServices = () => {
    const { getResource } = useHttp();

    const _apiBase = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const _apiKey = 'appid=9a7c546a676490e384ce2748d12424af';
    const _baseCityOffset = 'kiev'; //khust
    const _baseCountryOffset = 'UA';



    const getWeatherOfCity = async (baseCityOffset = _baseCityOffset,
        baseCountryOffset = _baseCountryOffset) => {
        const res = await getResource(`${_apiBase}${baseCityOffset},${baseCountryOffset}&${_apiKey}`);
        return res;
    }


    return { getWeatherOfCity }
}

//  default useWeatherServices;