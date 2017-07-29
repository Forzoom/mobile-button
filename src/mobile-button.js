const isUndef = (val) => val === null || val === undefined;
/**
 *
 *
 * 传入到$slots.default中的内容将作为children
 */
export default {
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
        tag: String,
        to: String,
        isSelected: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isBlock: {
            type: Boolean,
            default: false,
        },
    },
    render(h) {
        const vm = this;
        const classList = [
            'btn',
            'btn-mobile',
            !isUndef(vm.name) ? `btn-${vm.name}` : null,
            ...(vm.classList || []),
            vm.isDisabled ? 'disabled' : null,
            vm.isSelected ? 'selected' : null,
            vm.isBlock ? 'btn-block' : null,
        ];
        const tag = isUndef(vm.tag) ? 'a' : vm.tag;
        const domProps = isUndef(vm.id) ? {} : {
            id: vm.id,
        };
        const props = {};
        if (!isUndef(vm.to)) {
            if (tag === 'router-link') {
                props.to = vm.to;
            } else if (tag === 'a') {
                domProps.href = vm.to;
            }
        }
        return h(tag, {
            'class': classList,
            props,
            domProps,
            on: {
                click: function() {
                    if (!vm.isDisabled) {
                        vm.$emit('click');
                    }
                },
            },
        }, vm.$slots.default);
    },
};