import './index.scss';
import './public.scss';
import Ripple from './ripple';
import Dialogs from './dialogs';
import Input from './input';
import Switch from './switch';
import Button from './button';
import { PluginFunction } from 'vue';
export interface MbComponent<V> {
    component: V;
    install: PluginFunction<any>;
}
export interface ComponentList {
    [key: string]: MbComponent<any>;
}
export { Ripple, Dialogs, Input, Switch, Button };
export declare const list: ComponentList;
declare const install: PluginFunction<any>;
export default install;
