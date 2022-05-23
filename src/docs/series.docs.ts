/**
 * 
 * @swagger
 * components:
 *  schemas:
 *      Serie:
 *          type: object
 *          properties:
 *              id: 
 *                  type: string
 *                  description: ObjectId of serie
 *              name: 
 *                  type: string
 *                  description: Name of serie
 *              description: 
 *                  type: string
 *                  description: Description of serie
 *              season: 
 *                  type: integer
 *                  description: Season of serie
 *              gender:
 *                  type: string
 *                  description: Gender of serie
 *          required:
 *              - name
 *              - description
 *              - season
 *              - gender
 * 
 */

/**
 * 
 * @swagger
 * /series:
 *  post:
 *      summary: Crear series
 *      tags: [Serie]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Serie'
 *          
 *      responses:
 *          200:
 *              description: Serie created
 */


/**
 * 
 * @swagger
 * /series:
 *  get:
 *      summary: Obtener series
 *      tags: [Serie]
 *      responses:
 *          200:
 *              description: Serie created
 *              schema:
 *                type: "object"
 *                
 *          500:
 *              description: Internal Server Error
 * 
 *          401:
 *              description: Unauthorized
 */

//GET ID

/**
 * 
 * @swagger
 * /series/{id}:
 *  get:
 *      summary: Obtener series mediante id
 *      tags: [Serie]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Serie'
 *      parameters:
 *      - name : "id"
 *        in: "path"
 *        description: "Id para retornar una serie"
 *        required: true
 *        type: string  
 *          
 *      responses:
 *          400:
 *              description: Id invalido
 *          404:
 *              description: Id no encontrado
 */



/**
 * 
 * @swagger
 * /series/{id}:
 *  delete:
 *      summary: Delete a serie
 *      tags: [Serie]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Serie'
 *      parameters:
 *      - name : "id"
 *        in: "path"
 *        description: "Id para eliminar una serie"
 *        required: true
 *        type: string
 *      responses:
 *          200:
 *              description: Serie delete
 */


/**
 * 
 * @swagger
 * /series/{id}:
 *  put:
 *      summary: Update a serie
 *      tags: [Serie]
 *      parameters:
 *      - name : "id"
 *        in: "path"
 *        description: "Id para actualizar una serie"
 *        required: true
 *        type: string
 *      responses:
 *          200:
 *              description: Serie update
 */