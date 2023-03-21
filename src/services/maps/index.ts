import { ITarkovMapsModel } from '@/models/tarkov-maps.model';
import request from 'graphql-request';
import graphql from '../graphql';
import { GRAPHQL_QUERY } from '../graphql/queries';

export const loadMaps = {
  tarkov: () => {
    const data = request<ITarkovMapsModel>(
      graphql.graphqlURL,
      GRAPHQL_QUERY,
      {}
    );
    return data;
  },
};
