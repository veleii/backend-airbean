import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Airbean API",
    version: "1.0.0",
    description: 'Grupp-examination "Backend grunder"',
    contact: {
      name: "Vendela Leitner Norinder, Alice Larsson, Maria Kjellholm",
    },
    licence: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Lokal utvecklingsserver",
    },
    {
      url: "http://localhost:3030",
      description: "Fallback-server om 3000 är upptagen",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Products: {
        type: "object",
        properties: {
          coffeeMenu: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "number",
                  example: "1",
                },
                name: {
                  type: "string",
                  example: "Espresso",
                },
                price: {
                  type: "number",
                  example: "39",
                },
                description: {
                  type: "string",
                  example: "En liten men stark kaffe med intensiv smak.",
                },
              },
            },
          },
        },
      },
      UserSignUp: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          message: { type: "string", example: "Användaren har skapats" },
          data: {
            type: "object",
            properties: {
              id: {
                type: "string",
                example: "123e4567-e89b-12d3-a456-426614174000",
              },
              email: {
                type: "string",
                format: "email",
                example: "mail@example.com",
              },
              password: {
                type: "string",
              },
              createdAt: {
                type: "string",
                format: "date-time",
                example: "2025-04-15T07:32:05.903Z",
              },
            },
          },
        },
      },
      UserSignIn: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          message: { type: "string", example: "Inloggningen lyckades" },
          data: {
            type: "object",
            properties: {
              user: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                    format: "email",
                    example: "mail@example.com",
                  },
                },
              },
            },
          },
          accessToken: {
            type: "string",
          },
          expiresIn: {
            type: "string",
            example: "3h",
          },
        },
      },
      Orders: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          message: { type: "string", example: "Ordern har skapats" },
          data: {
            type: "object",
            properties: {
              userId: {
                type: "string",
                example: "123e4567-e89b-12d3-a456-426614174000",
              },
              orderNr: {
                type: "string",
              },
              orderDate: {
                type: "string",
                format: "date-time",
                example: "2025-04-15T07:32:05.903Z",
              },
              ETA: {
                type: "string",
                format: "date-time",
                example: "2025-04-15T07:32:05.903Z",
              },
              delivered: {
                type: "boolean",
                example: "true",
              },
              totalPrice: {
                type: "number",
                example: "179",
              },
              totalOrder: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    productId: {
                      type: "number",
                      example: "1",
                    },
                    name: {
                      type: "string",
                      example: "Flat White",
                    },
                    quantity: {
                      type: "number",
                      example: "2",
                    },
                    price: {
                      type: "number",
                      example: "39",
                    },
                    total: {
                      type: "number",
                      example: "200",
                    },
                  },
                },
              },
            },
          },
        },
        required: ["success", "message", "data"],
      },
      OrderDetail: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          data: {
            type: "object",
            properties: {
              userId: {
                type: "string",
                example: "123e4567-e89b-12d3-a456-426614174000",
              },
              orderNr: {
                type: "string",
              },
              orderDate: {
                type: "string",
                format: "date-time",
                example: "2025-04-15T07:32:05.903Z",
              },
              ETA: {
                type: "string",
                format: "date-time",
                example: "2025-04-15T07:32:05.903Z",
              },
              delivered: {
                type: "boolean",
                example: "true",
              },
              totalPrice: {
                type: "number",
                example: "179",
              },
              totalOrder: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    productId: {
                      type: "number",
                      example: "1",
                    },
                    name: {
                      type: "string",
                      example: "Flat White",
                    },
                    quantity: {
                      type: "number",
                      example: "2",
                    },
                    price: {
                      type: "number",
                      example: "39",
                    },
                    total: {
                      type: "number",
                      example: "200",
                    },
                  },
                },
              },
            },
          },
        },
        required: ["success", "data"],
      },
      OrderHistory: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          message: {
            type: "string",
            example: "Hämtning av orderhistorik lyckades.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OrderDetail",
            },
          },
        },
        required: ["success", "message", "data"],
      },
      Info: {
        type: "object",
        properties: {
          title: {
            type: "string",
            example: "Lorem",
          },
          desc: {
            type: "string",
            example: "Lorem ispsum...",
          },
          desc: {
            type: "string",
            example: "Lorem ispsum...",
          },
          ownerName: {
            type: "string",
            example: "Arne Arnesson",
          },
          ownertitle: {
            type: "string",
            example: "VD",
          },
          img: {
            type: "string",
          },
        },
      },
    },
  },
  tags: [
    { name: "Products" },
    { name: "Info" },
    { name: "User" },
    { name: "Orders" },
  ],
  paths: {
    "/products": {
      get: {
        tags: ["Products"],
        description: "Returnerar en lista med meny-produkter",
        responses: {
          200: {
            description: "Lyckad hämtning av en lista med meny-produkter",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Products",
                },
              },
            },
          },
          500: {
            description: "Fel vid hämtning av data",
          },
        },
      },
    },
    "/info": {
      get: {
        tags: ["Info"],
        description:
          "Returnerar ett objekt med information om företaget (Airbean)",
        responses: {
          200: {
            description: "Lyckad hämtning av objekt med företagsinfo",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Info",
                },
              },
            },
          },
          500: {
            description: "Fel vid hämtning av data",
          },
        },
      },
    },
    "/user/signup": {
      post: {
        tags: ["User"],
        description: "Skapar en ny användare",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "test@example.com",
                  },
                  password: {
                    type: "string",
                    description: "Minst 6 tecken",
                  },
                },
              },
              required: ["email", "password"],
            },
          },
        },
        responses: {
          201: {
            description: "Användare skapad",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserSignUp",
                },
              },
            },
          },
          400: {
            description: "Ogiltig indata",
          },
          500: {
            description: "Fel vid skapande av användare",
          },
        },
      },
    },
    "/user/signin": {
      post: {
        tags: ["User"],
        description: "Loggar in en användare",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "test@example.com",
                  },
                  password: {
                    type: "string",
                    description: "Minst 6 tecken",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Användare inloggad",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserSignIn",
                },
              },
            },
          },
          400: {
            description: "Ogiltig indata",
          },
          500: {
            description: "Fel vid inloggning av användare",
          },
        },
      },
    },
    "/orders/order": {
      post: {
        security: [{ bearerAuth: [] }],
        tags: ["Orders"],
        description: "Skickar en order",
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: true,
            schema: {
              type: "string",
              example: "Bearer eyJhbGciOiJI…",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  totalOrder: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "number",
                        },
                        quantity: {
                          type: "number",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Order skapad",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Orders",
                },
              },
            },
          },
          401: {
            description: "Åtkomst nekad, token saknas",
          },
          400: {
            description: "Ogiltig indata",
          },
          500: {
            description: "Fel vid skapande av order",
          },
        },
      },
    },
    "/orders/{orderNr}": {
      get: {
        security: [{ bearerAuth: [] }],
        tags: ["Orders"],
        description: "Returnerar information om en order utifrån ordernummer",
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: true,
            schema: {
              type: "string",
              example: "Bearer eyJhbGciOiJI…",
            },
          },
          {
            name: "orderNr",
            in: "path",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: {
            description: "Orderinfo hämtad",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/OrderDetail",
                },
              },
            },
          },
          401: {
            description: "Åtkomst nekad, token saknas",
          },
          500: {
            description: "Fel vid hämtning av data",
          },
        },
      },
    },
    "/orders/history": {
      get: {
        security: [{ bearerAuth: [] }],
        tags: ["Orders"],
        description: "Returnerar lista med specifik användares orderhistorik",
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: true,
            schema: {
              type: "string",
              example: "Bearer eyJhbGciOiJI…",
            },
          },
        ],
        responses: {
          200: {
            description: "Lyckad hämtning av orderhistorik",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/OrderHistory",
                },
              },
            },
          },
          401: {
            description: "Åtkomst nekad, token saknas",
          },
          500: {
            description: "Fel vid hämtning av data",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [],
};
export const swaggerDocs = swaggerJSDoc(options);
