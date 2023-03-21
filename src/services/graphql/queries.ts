import { gql } from 'graphql-request';

export const GRAPHQL_QUERY = gql`
  query GET_MAPS {
    maps {
      id
      name
      normalizedName
      raidDuration
      players
      enemies
      bosses {
        spawnChance
        boss {
          id
          name
          imagePortraitLink
        }
      }
    }
  }
`;
