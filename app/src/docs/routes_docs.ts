/**
 * @swagger
 * components:
 *  schemas:
 *    bodyRequest:
 *      type: object
 *      properties:
 *        item: 
 *          type: string
 *          description: nombre del articulo
 *        itemDescription: 
 *          type: string
 *          description: descripcion detallada del articulo
 *        amount:
 *          type: number
 *          description: cantidad de articulos a comprar
 *        total: 
 *          type: number
 *          description: total a pagar sin puntos ni comas
 *      example:
 *        item: item name
 *        itemDescription: description of the item
 *        amount: 1
 *        total: 1200
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    responseRequest:
 *      type: object
 *      properties:
 *        paymentUrl:
 *          type: string
 *          description: link a la pasarela de pagos de stripe con la informacion del articulo a pagar
 *      example:
 *        paymentUrl: https//checkout/stripe.com
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    badRequest:
 *      type: object
 *      properties:
 *        total:
 *          type: object
 *          properties:
 *            type:
 *              type: string
 *              description: tipo de dato al que se refiere
 *            value:
 *              type: string
 *              description: valor del campo erroneo
 *            msg:
 *              type: string
 *              description: mensage detallado del error
 *            path:
 *              type: string
 *              description: nombre del atributo
 *            location:
 *              type: srting
 *              description: ubicacion del objeto
 *      example:
 *        total: 
 *          type: field
 *          value: 200.!#$
 *          msg: the total must be a integer!
 *          location: body
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    authorizedError:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: mensage indicando el error
 *      example:
 *        error: unauthorized
 */

/**
 * @swagger
 * /payments:
 *  post:
 *    security:
 *      - jwtCookieAuth: []
 *    summary: retorna el link que redirige a la pasarela de pagos de stripe
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/bodyRequest'
 *    responses:
 *      201:
 *        description: retorna el link para realizar el pago
 *        content:
 *          application/json:
 *            type: object
 *            $ref: '#/components/schemas/responseRequest'
 *      400:
 *        description: retorna informacion del error en el json enviado en la peticion
 *        content:
 *          application/json:
 *            type: object
 *            $ref: '#/components/schemas/badRequest'
 *      401:
 *        description: retorna un error al realizar la peticion sin el token de autenticacion
 *        content:
 *          application/json:
 *            type: object
 *            $ref: '#/components/schemas/authorizedError'
 */
