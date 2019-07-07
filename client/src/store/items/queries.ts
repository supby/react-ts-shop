import gql from "graphql-tag";

export const GET_PRODUCTS_QUERY = gql`
  query Products($filter: String, $skip: Int, $first: Int) {
    products(skip: $skip, first: $first, where: { name_contains: $filter }) {
      id
      name
      description
      price
      image
    }
    reviews(where: {product: {name_contains: $filter} }) {
      product {
        id
      }
      rating
    }
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;
