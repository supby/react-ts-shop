"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
    type Query {
        departments: [Department]
        department(id: Int!): Department
    }

    type Department {
        id: Int!
        name: String!
        description: String
    }

    type Category {
        id: Int!
        department: Department!
        name: String!
        description: String
    }

    type Product {
        id: Int!
        name: String!
        description: String!
        price: Float!
        discountedPrice: Float!
        image: String
        image2: String
        thumbnail: String
        display: Int!
    }

    type ProductCategory {
        product: Product!
        category: Category!
    }

    type Attribute {
        id:Int!
        name: String!
    }

    type AttributeValue {
        id: Int!
        attribute: Attribute!
        value: String!
    }

    type ProductAttribute {
        product: Product!
        attributeValue: AttributeValue!
    }

    type ShoppingCart {
        itemId: Int!
        cartId: String!
        product: Product!
        attributes: String!
        quantity: Int!
        buyNow: Boolean!
        addedOn: String!
    }

    type Order {
        id: Int!
        totalAmount: Float!
        createdOn: String!
        shippedOn: String!
        status: Int!
        comments: String
        customer: Customer
        authCode: String
        reference: String
        shipping: Shipping
        tax: Tax
    }

    type OrderDetail {
        id: Int!
        order: Order!
        product: Product!
        attributes: String!
        productName: String!
        quantity: Int!
        unitCost: Float!
    }

    type ShippingRegion {
        id: Int!
        shippingRegion: String!
    }

    type Customer {
        id: Int!
        name: String!
        email: String!
        password: String!
        creditCard: String
        address1: String
        address2: String
        city: String
        region: String
        postalCode: String
        country: String
        shippingRegion: ShippingRegion!
        dayPhone: String
        evePhone: String
        mobPhone: String
    }

    type Shipping {
        id: Int!
        shippingType: String!
        shippingCost: Float!
        shippingRegion: ShippingRegion!
    }

    type Tax {
        id: Int!
        taxType: String!
        taxPercentage: Float!
    }

    type Audit {
        id: Int!
        order: Order!
        createdOn: String!
        message: String!
        code: Int!
    }

    type Review {
        id: Int!
        customer: Customer!
        product: Product!
        review: String!
        rating: Int!
        created_On: String!
    }
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map