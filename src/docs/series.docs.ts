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
 *      summary: Creates a new Serie
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
 *      summary: Creates a new Serie
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
 *  delete:
 *      summary: Creates a new Serie
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
 *  put:
 *      summary: Creates a new Serie
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