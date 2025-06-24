import { ref, watch, computed } from 'vue';
const props = defineProps();
const emit = defineEmits(['update:modelValue']);
const visible = ref(props.modelValue);
watch(() => props.modelValue, (newVal) => {
    visible.value = newVal;
});
const closeSnackbar = () => {
    console.log(visible.value);
    visible.value = false;
    emit('update:modelValue', false);
    console.log(visible.value);
};
const bgColor = computed(() => {
    switch (props.color) {
        case 'success':
            return '#22c55e';
        case 'error':
            return '#ef4444';
        case 'warning':
            return '#facc15';
        case 'info':
        default:
            return '#3b82f6';
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "slide-fade",
}));
const __VLS_2 = __VLS_1({
    name: "slide-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.visible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "snackbar text-white px-4 py-3 rounded-lg shadow-lg z-50" },
        ...{ style: ({ backgroundColor: __VLS_ctx.bgColor }) },
    });
    if (props.color === 'success') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else if (props.color === 'error') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else if (props.color === 'warning') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.message);
    const __VLS_4 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ 'onClick': {} },
        variant: "text",
        icon: "mdi-close",
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
        variant: "text",
        icon: "mdi-close",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onClick: (__VLS_ctx.closeSnackbar)
    };
    var __VLS_7;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['snackbar']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            closeSnackbar: closeSnackbar,
            bgColor: bgColor,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
