
# Widget de Clima

Este proyecto es un widget de clima que muestra la temperatura actual y el pronóstico de los próximos días para una ciudad seleccionada. Utiliza la API de OpenWeatherMap para obtener la información meteorológica.

## Características
- Muestra la temperatura actual y una breve descripción del clima.
- Pronóstico de los próximos días con iconos representativos del estado del clima.
- Búsqueda de ciudades mediante un campo de selección interactivo.
- Diseño responsivo y atractivo.

## Requisitos
- Conexión a internet para obtener datos de la API.
- Un navegador web moderno compatible con HTML, CSS y JavaScript.

## Instalación
1. Clona este repositorio o descarga los archivos.
   ```bash
   git clone https://github.com/tuusuario/weather-widget.git
   ```
2. Abre el archivo `index.html` en un navegador.

## Estructura del Proyecto
```
/weather-widget
│── index.html      # Estructura principal del widget
│── style.css       # Estilos del widget
│── script.js       # Lógica del widget
```

## Uso
1. Entra a la página: http://elysium1617.wuaze.com
2. Al cargar la página, el widget muestra el clima por defecto de Nueva York.
3. Puedes buscar y seleccionar otra ciudad mediante el campo de búsqueda.
4. Se mostrarán la temperatura y el pronóstico de los próximos días.

## API Utilizada
Este proyecto usa la API de OpenWeatherMap:
- **URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Parámetros principales:**
  - `q`: Nombre de la ciudad.
  - `appid`: Clave de API.
  - `units=metric`: Para mostrar la temperatura en grados Celsius.
- **Pronóstico:** `https://api.openweathermap.org/data/2.5/forecast`

## Personalización
- Puedes cambiar la ciudad por defecto modificando la función `getWeather("New York")` en `script.js`.
- Los estilos pueden personalizarse en `style.css`.

