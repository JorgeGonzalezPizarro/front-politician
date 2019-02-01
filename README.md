Proyecto frontend de Api-politicians creado con React y Redux. 

## Iniciar el proyecto

Dentro del directorio del proyecto 

### `npm run start`

Abrirá un navegador apuntando a la url <br>
 [http://localhost:3000](http://localhost:3000).
 En caso de no abrirse automaticamente , navegar a esa url:3000.
 
El fichero ./shared/Politician/Routes contiene las rutas necsarias para la conexion con el Api .


## Distribución componentes

La distribución se ha realizado diviendo componentes funcionales de los presentacionales . 

Maincomponent.js es el container principal y conecta con redux , contiene la logica para pasar las props a los componentes hijos

La carpeta redux contiene la store y llamadas necesarias al api.
