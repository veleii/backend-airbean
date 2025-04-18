import { application, response } from "express";
import { type } from "os";
import { format } from "path";
import { title } from "process";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDocument = {
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
  paths: {
    "/products": {
      get: {
        description: "Returnerar en lista med meny-produkter",
        responses: {
          200: {
            description: "Lyckad hämtning av en lista med meny-produkter",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "",
                  },
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
        description:
          "Returnerar ett objekt med information om företaget (Airbean)",
        responses: {
          200: {
            description: "Lyckad hämtning av objekt med företagsinfo",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                    },
                    desc: {
                      type: "string",
                    },
                    ownerName: {
                      type: "string",
                    },
                    ownerTitle: {
                      type: "string",
                    },
                    img: {
                      type: "string",
                    },
                  },
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
      },
      responses: {
        201: {
          description: "Användare skapad",
          content: {
            "application/json": {
              schema: {
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
        },
        400: {
          description: "Ogiltig indata",
        },
        500: {
          description: "Fel vid skapande av användare",
        },
      },
    },
    "/user/signin": {
      post: {
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
      },
      responses: {
        201: {
          description: "Användare inloggad",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                  },
                  message: {
                    type: "string",
                  },
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
    "orders/order": {
      post: {
        description: "Skickar en order",
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
                  totalOrder: {
                    type: "number",
                    example: "179",
                  },
                  totalOrder: {
                    type: "array",
                    items: {
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
    "orders/{orderNr}": {
      get: {
        description: "Returnerar information om en order utifrån ordernummer",
        parameters: {
            name: 'orderNr',
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Orderinfo hämtad",
          content: {
            "application/json": {
              schema: {
                $ref: "",
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
    "orders/history": {
      get: {
        description: "Returnerar lista med specifik användares orderhistorik",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Lyckad hämtning av orderhistorik",
          content: {
            "application/json": {
              schema: {
                $ref: "",
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
};
