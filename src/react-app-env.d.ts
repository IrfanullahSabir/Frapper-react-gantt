/// <reference types="react-scripts" />
declare module "*.json" {
    const value: any;
    export default value;
}

declare function require(name: string): string;
