export interface RouteConfig {
    path?: string;
    Component?: React.ComponentType;
    children?: RouteConfig[];
    element?: React.ReactElement;
    index?: boolean;
}