export interface Loaders {}

export type CreateLoaders = () => Loaders;

export const createLoaders: CreateLoaders = () => ({});
