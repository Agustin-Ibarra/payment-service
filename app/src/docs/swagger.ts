import swaggerJsDoc, { OAS3Definition } from 'swagger-jsdoc';
import path from 'path';
import { SwaggerOptions } from 'swagger-ui-express';

const dirname = path.resolve();
const swaggerDefinition : OAS3Definition = {
  openapi:"3.0.0",
  info:{
    title:'microservice for payments APIs documentation',
    version:'1.0.0'
  },
  servers:[{url:'http://localhost:3001'}],
  components:{
    securitySchemes:{
      jwtCookieAuth:{
        type:'apiKey',
        in:'cookie',
        name:'jwt'
      }
    }
  },
  security:[{
    jwtCookieAuth:[]
  }]
}

const swaggerOption:SwaggerOptions={
  swaggerDefinition,
  apis:[path.join(dirname,'app/src/docs/routes_docs.ts')]
}

export default swaggerJsDoc(swaggerOption);