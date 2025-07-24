# payment-service
Este microservicio se encarga de procesar pagos por suscripción utilizando la API Stripe. Al recibir una solicitud, valida los datos enviados. Si los datos son correctos, genera una sesión de pago en Stripe y retorna una URL que permite al usuario completar la transacción. En caso de que los datos sean inválidos o falten, responde con un mensaje de error.
## caracteristicas
1. [Caracteristicas](#caracteristicas)
2. [BackEnd](#backend)
3. [Documentacion](#documentacion)
4. [Pruebas unitarias y de integracion](#pruebas-unitarias)
5. [Monitoreo](#monitoreo)
6. [Contenedores Docker](#contenedores-docker)
## Caracteristicas
- Gestiona peticiones desde para realizar pagos online
- Integración con API de terceros, utiliza los servicios de stripe para realizar pagos online
- Uso de varibles de entorno para el acceso a diferentes servicios y otros usos especificos
- Implementacion de contenedores Docker para ejcutar la aplicacion en entornos aislados
## BackEnd
- Tecnologias: el servidor de este microservicio, esta desarrollado en TypeScript con Node.js y el framework de Express
- La organizacion de los archivos del proyecto tiene la siguiente estructura:
```plaintext
backend/
├── source
|   ├── auth/              # Verifiacion de token de autenticacion
|   ├── config/            # Configuracion de acceso a variables de entorno
|   ├── controllers/       # Procesamiento de las peticiones
|   ├── docs/              # Configuración de swagger y archivo con la documentacion de APIs
|   ├── middlewares/       # Middlewares (procesamiento de los datos en las peticiones)
|   ├── monitoring/        # Archivos de configuracion de winston y archivos logs
|   ├── routes/            # Definición de rutas
|   └── index.ts           # Punto de entrada de la aplicación
├── tests
|   ├── unit/              # tests de integracion
|   └── integration/       # tests unitarios
```
Ejemplo de respuesta con estado 200

```json
{
  "url": "https://checkout.stripe.com/c/pay/..."
}
```

Ejemplo de respuesta con estado 400

```json
{
  "errorMessage": "Error when processing payment, the field idprice may be incorrect"
}
```

## Documentacion
- Codigo fuente: el codigo del servidor fue documentado con JSDocs
- APIs: la documentacion de las APIs fure generada con swagger open.io enlace a la documentacion [docs](http://localhost:3001/microservice/payments/docs)
## Pruebas unitarias
- Unit: las pruebas unitarias estan desrrolladas con la libreria Jest y Mock
## Pruebas de integracion
- Integration: las pruebas unitarias estan desrrolladas con la libreria Jest y Supertest
- Iniciar Test: para iniciar los test se ejecuta el siguiente comando
```javascript
npm run test
```
## Monitoreo
- El monitoreo se realiza con la libreria, winston mostrando en consola la actividad del microservicio, permite escalar a un monitereo mas avanzado con reportes y analisis de los archivos logs para notifical sobre el funcionamiento o errores del servicio.

Ejemplo de salida de logs

```javascript
24/7/2025, 15:18:21, warning, method:POST, statusCode:401, url:/subscription, ipAdress:217.167.221.177
24/7/2025, 15:18:21, info, method:POST, statusCode:200, url:/subscription, ipAdress:217.167.221.177
24/7/2025, 15:18:21, warning, method:POST, statusCode:400, url:/subscription, ipAdress:217.167.221.177
```

## Contenedores Docker
- La aplicacion utiliza contendores para facilitar el despliegue y ejecutar la aplicacion en entornos aislados
- Para crear un contendor basado en la imagen del proyecto, tiene que estar en la raiz del mismo y ejecutar el siguiente comando
```javascript
docker-compose up payments-service --build
```
- Ejecutar contenedor: para ejecutar el contenedor se ejcuta el siguiente comando
```javascript
docker start payments-service
```
