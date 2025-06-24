import { ref } from 'vue';
import Snackbar from '@/components/Snackbar.vue';
const snackbarVisible = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('info');
function showSnackbar(message, color = 'info') {
    snackbarMessage.value = message;
    snackbarVisible.value = true;
    snackbarColor.value = color;
}
const city = ref('');
const weather = ref(null);
const loading = ref(false);
const fetchWeather = async () => {
    if (!city.value)
        return;
    loading.value = true;
    try {
        const apiKey = '3910c585fac6f687c9543a7ed0717ea0';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);
        if (data.cod !== 200) {
            showSnackbar('There was an issue. ' + data.message, 'error');
            weather.value = null;
        }
        else {
            weather.value = {
                temp: data.main.temp,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                city: data.name,
                country: data.sys.country,
            };
            showSnackbar('Successfully grabbed city!', 'success');
        }
    }
    catch (error) {
        console.error('Error fetching weather:', error);
        showSnackbar('Error fetching weather: ' + error, 'error');
        weather.value = null;
    }
    finally {
        loading.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['weather-input']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "weather-app" },
});
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "text-center d-flex flex-column justify-center align-center glass-card" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "text-center d-flex flex-column justify-center align-center glass-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "headline mb-6" },
});
const __VLS_4 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onKeyup': {} },
    ...{ class: "weather-input mb-4" },
    modelValue: (__VLS_ctx.city),
    label: "Enter City",
    prependInnerIcon: "mdi-city",
    variant: "solo-filled",
}));
const __VLS_6 = __VLS_5({
    ...{ 'onKeyup': {} },
    ...{ class: "weather-input mb-4" },
    modelValue: (__VLS_ctx.city),
    label: "Enter City",
    prependInnerIcon: "mdi-city",
    variant: "solo-filled",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onKeyup: (__VLS_ctx.fetchWeather)
};
var __VLS_7;
const __VLS_12 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onClick': {} },
    color: "deep-purple-accent-4",
    loading: (__VLS_ctx.loading),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onClick': {} },
    color: "deep-purple-accent-4",
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_16;
let __VLS_17;
let __VLS_18;
const __VLS_19 = {
    onClick: (__VLS_ctx.fetchWeather)
};
__VLS_15.slots.default;
var __VLS_15;
if (__VLS_ctx.weather) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mt-8 weather-result" },
    });
    const __VLS_20 = {}.VImg;
    /** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        src: (`https://openweathermap.org/img/wn/${__VLS_ctx.weather.icon}@4x.png`),
        contain: true,
        width: "120",
        ...{ class: "mx-auto mb-2" },
    }));
    const __VLS_22 = __VLS_21({
        src: (`https://openweathermap.org/img/wn/${__VLS_ctx.weather.icon}@4x.png`),
        contain: true,
        width: "120",
        ...{ class: "mx-auto mb-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "temp" },
    });
    (__VLS_ctx.weather.temp);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "desc" },
    });
    (__VLS_ctx.weather.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "location" },
    });
    (__VLS_ctx.weather.city);
    (__VLS_ctx.weather.country);
}
var __VLS_3;
/** @type {[typeof Snackbar, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(Snackbar, new Snackbar({
    modelValue: (__VLS_ctx.snackbarVisible),
    message: (__VLS_ctx.snackbarMessage),
    color: (__VLS_ctx.snackbarColor),
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.snackbarVisible),
    message: (__VLS_ctx.snackbarMessage),
    color: (__VLS_ctx.snackbarColor),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {__VLS_StyleScopedClasses['weather-app']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['glass-card']} */ ;
/** @type {__VLS_StyleScopedClasses['headline']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-input']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-result']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['temp']} */ ;
/** @type {__VLS_StyleScopedClasses['desc']} */ ;
/** @type {__VLS_StyleScopedClasses['location']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Snackbar: Snackbar,
            snackbarVisible: snackbarVisible,
            snackbarMessage: snackbarMessage,
            snackbarColor: snackbarColor,
            city: city,
            weather: weather,
            loading: loading,
            fetchWeather: fetchWeather,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
