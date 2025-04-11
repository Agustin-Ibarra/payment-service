# payment-service
El microservicio fue desarrollado con la finalidad de procesar pagos de articulos mediante la API de stripe.
## caracteristicas
1. [Caracteristicas](#caracteristicas)
2. [BackEnd](#backend)
3. [Documentacion](#documentacion)
4. [Pruebas Unitarias](#pruebas-unitarias-y-de-integracion)
5. [Monitoreo](#monitoreo)
6. [Contenedores Docker](#contenedores-docker)
## Caracteristicas
- Gestiona peticiones desde para realizar pagos online
- Integración con API de terceros, utiliza los servicios de stripe para realizar pagos online
- Uso de varibles de entorno para el acceso a diferentes servicios y otros usos especificos
- Implementacion de contenedores Docker para ejcutar la aplicacion en entornos aislados
## BackEnd
- Tecnologias: el servidor de este microservicio, esta desarrollado con TypeScript en Node.js con el framework de Express
- La estructura del backend está organizada de la siguiente manera:
```plaintext
backend/
  ├── source
  |    ├── auth/              # verifiacion de token de autenticacion
  |    ├── config/            # configuraciones de acceso a variables de entorno
  |    ├── controllers/       # Controladores de las rutas y logica de las respuestas
  |    ├── docs/              # Configuración de swagger y archivo con la documentacion de APIs
  |    ├── middlewares/       # Middlewares (procesamiento de los datos en las peticiones)
  |    ├── monitoring/        # Archivos de configuracion de winston y archivos logs
  |    ├── routes/            # Definición de rutas
  |    ├── services/          # Modulos de servicios y configuracion de stripe
  |    └── index.ts           # Punto de entrada de la aplicación
  ├── tests
  |    ├── unit/              # test de integracion
  |    └── integration/       # tes unitarios
```
## Documentacion
- Codigo fuente: el codigo del servidor fue documentado con JSDocs
- APIs: la documentacion de las APIs fure generada con swagger open.io enlace a la documentacion [docs](http://localhost:3001/microservice/payments/docs)
- ## Pruebas unitarias
- Testing: las pruebas unitarias estan desrrolladas con la libreria Jest y Mock
## Pruebas de integracion
- Testing: las pruebas unitarias estan desrrolladas con la libreria Jest y Supertest
- Iniciar Test: para iniciar los test se ejecuta el siguiente comando
``` bash
npm run test
```
## Monitoreo
- El monitoreo se realiza con la libreria, winston mostrando en consola la actividad del microservicio, permite escalar a un monitereo mas avanzado con reportes y analisis de los archivos logs para notifical sobre el funcionamiento o errores del servicio.
## Contenedores Docker
- La aplicacion utiliza contendores para facilitar el despliegue y ejecutar la aplicacion en entornos aislados
- Para crear un contendor basado en la imagen del proyecto, tiene que estar en la raiz del mismo y ejecutar el siguiente comando
```
docker-compose up payments-service --build
```
- Ejecutar contenedor: para ejecutar el contenedor se ejcuta el siguiente comando
``` bash
docker start payments-service
```
