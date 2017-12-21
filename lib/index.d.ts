import './index.scss';
import './public.scss';
import { PluginFunction } from 'vue';
export interface MbComponent<V> {
    component: V;
    install: PluginFunction<any>;
}
export interface ComponentList {
    [key: string]: MbComponent<any>;
}
export declare const list: ComponentList;
declare const install: PluginFunction<any>;
export default install;
