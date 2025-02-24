const apiKey = 'a6d946b32dca96334746b6c6f50bf7de';

$('#city-search').select2({
    placeholder: 'Buscar ciudad...',
    minimumInputLength: 1,
    ajax: {
        url: 'https://api.openweathermap.org/geo/1.0/direct',
        dataType: 'json',
        delay: 250,
        data: params => ({ q: params.term, limit: 5, appid: apiKey }),
        processResults: data => ({ results: data.map(city => ({ id: city.name, text: city.name })) })
    }
}).on('select2:select', function (e) {
    getWeather(e.params.data.id);
    getForecast(e.params.data.id);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('city-name').textContent = '📍 ' + data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + '°';
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`;
    const response = await fetch(url);
    const data = await response.json();
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '';

    let dailyData = {};
    data.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
        const dayNumber = date.getDate();
        const monthName = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
        const displayDay = date.getDate() === new Date().getDate() + 1 ? 'Mañana' : dayName.charAt(0).toUpperCase() + dayName.slice(1);
        if (!dailyData[displayDay]) {
            dailyData[displayDay] = { date: `${dayNumber} ${monthName}`, item };
        }
    });
    
    Object.keys(dailyData).slice(0, 3).forEach(day => {
        const { date, item } = dailyData[day];
        forecastDiv.innerHTML += `
            <div class="forecast-item">
                <div>
                    <div class="date">${date}</div>
                    <div class="day">${day}</div>
                </div>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">
                <span class="temp">
                    <span>${Math.round(item.main.temp_max)}°</span>
                    <span>${Math.round(item.main.temp_min)}°</span>
                </span>
            </div>`;
    });
}
