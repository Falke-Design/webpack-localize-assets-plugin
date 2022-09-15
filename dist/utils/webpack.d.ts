import type WebpackError from 'webpack/lib/WebpackError.js';
import type { SimpleCallExpression } from 'estree';
import { Webpack, Compilation, WP5, NormalModuleFactory, Module } from '../types';
export declare const isWebpack5: (wp: Webpack) => boolean;
export declare const isWebpack5Compilation: (compilation: Compilation) => compilation is WP5.Compilation;
export declare const toConstantDependency: any;
export declare const deleteAsset: (compilation: Compilation, assetName: string, newAssetNames: string[]) => void;
export declare const reportModuleWarning: (module: Module, warning: WebpackError) => void;
export declare const reportModuleError: (module: Module, error: WebpackError) => void;
export declare const onFunctionCall: (normalModuleFactory: NormalModuleFactory, functionName: string, hook: (parser: WP5.javascript.JavascriptParser, node: SimpleCallExpression) => void) => void;
