import { ComponentOptions, PropsDefinition, DefaultMethods, DefaultComputed } from "vue/types/options";
import { CombinedVueInstance } from "vue/types/vue";

interface MobileButtonProp {
    id?: string;
    /** 类型名字，例如primary */
    name?: string;
    classList?: string[];
    // 所使用的标签
    tag?: string;
    // 所希望去的路由
    to: any;
    // 是否是选中的状态
    isSelected?: boolean;
    // 是否是禁用的状态
    isDisabled?: boolean;
    // 是否是block的样式
    isBlock?: boolean;
    handleClick?: () => void;
    handleClickWhenDisable?: () => void;
}
export type MobileButtonComponent = CombinedVueInstance<Vue, object, object, object, MobileButtonProp>;
export type MobileButtonComponentOptions = ComponentOptions<Vue, object, DefaultMethods<Vue>, DefaultComputed, PropsDefinition<MobileButtonProp>, MobileButtonProp>;

export const MobileButton: MobileButtonComponentOptions;
