function isUndef(val) {
    return val === null || val === undefined;
}
/**
 *
 *
 * 传入到$slots.default中的内容将作为children
 */
var mobileButton = {
    name: 'MobileButton',
    props: {
        id: {
            type: String,
        },
        // 类型名字，例如primary
        name: {
            type: String,
        },
        classList: {
            type: Array,
        },
        // 所使用的标签
        tag: String,
        // 所希望去的路由
        to: {
            type: [ Object, String, ],
        },
        // 是否是选中的状态
        isSelected: {
            type: Boolean,
            default: false,
        },
        // 是否是禁用的状态
        isDisabled: {
            type: Boolean,
            default: false,
        },
        // 是否是block的样式
        isBlock: {
            type: Boolean,
            default: false,
        },
    },
    render(h) {
        var vm = this;
        var classList = [
            'btn',
            'btn-mobile',
            !isUndef(vm.name) ? 'btn-' + vm.name : null,
            vm.isDisabled ? 'disabled' : null,
            vm.isSelected ? 'selected' : null,
            vm.isBlock ? 'btn-block' : null,
        ];
        classList = classList.concat((vm.classList || []));
        var tag = isUndef(vm.tag) ? 'a' : vm.tag;
        var domProps = isUndef(vm.id) ? {} : {
            id: vm.id,
        };
        var props = {};
        if (!isUndef(vm.to)) {
            if (tag === 'router-link') {
                props.to = vm.to;
            } else if (tag === 'a') {
                domProps.href = vm.to;
            }
        }
        // click事件
        var click = function(e) {
            // 当前不是disabled情况下
            if (!vm.isDisabled) {
                vm.$emit('click', e);
            } else {
                vm.$emit('click-when-disabled', e);
            }
        };
        // touchstart事件
        var touchstart = function() {
            vm.$emit('touchstart');
        };
        var on = {};
        var nativeOn = {};
        if (tag == 'router-link') {
            nativeOn.click = click;
            nativeOn.touchstart = touchstart;
        } else {
            on.click = click;
            on.touchstart = touchstart;
        }
        return h(tag, {
            class: classList,
            props: props,
            domProps: domProps,
            on: on,
            nativeOn: nativeOn,
        }, vm.$slots.default);
    },
};

export default mobileButton;
