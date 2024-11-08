import { ComponentType, ReactElement } from 'react';

export interface RouteConfig {
  path?: string;
  Component?: ComponentType;
  children?: RouteConfig[];
  element?: ReactElement;
  index?: boolean;
}

export interface ProcessedRoute {
  path?: string;
  element?: ReactElement;
  children?: ProcessedRoute[];
  index?: false | undefined;
}