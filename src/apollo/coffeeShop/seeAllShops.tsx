import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { seeAllShops } from "__generated__/seeAllShops";

export const SEE_ALL_SHOPS_QUERY = gql`
  query seeAllShops {
    seeAllShops {
      ok
      error
      totalCount
      coffeeShops {
        id
        name
        latitude
        longitude
        user {
          id
          username
          avatarURL
        }
        photos {
          id
          url
        }
        categories {
          id
          name
        }
      }
    }
  }
`;

export const UseSeeAllShops = () => {
  const { data } = useQuery<seeAllShops>(SEE_ALL_SHOPS_QUERY);
  return data;
};
