import _ from 'lodash';
import { authorResolvers } from './authorResolver';

export const resolvers = _.merge({}, authorResolvers);
