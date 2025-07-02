import { ref, watch } from 'vue';
import Snackbar from '@/components/Snackbar.vue';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { onMounted } from 'vue';
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'workouts'));
    querySnapshot.forEach((doc) => {
        workouts.value.push({ id: doc.id, ...doc.data() });
    });
});
function getWorkoutIcon(type) {
    switch (type.toLowerCase()) {
        case 'cardio':
            return 'mdi-run-fast';
        case 'strength':
            return 'mdi-dumbbell';
        case 'mobility':
            return 'mdi-yoga';
        default:
            return 'mdi-help-circle-outline';
    }
}
const snackbarVisible = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('info');
function showSnackbar(message, color = 'info') {
    snackbarMessage.value = message;
    snackbarVisible.value = true;
    snackbarColor.value = color;
}
const dialog = ref(false);
watch(dialog, (val) => {
    if (!val) {
        form.value = {
            name: '',
            type: '',
            duration: 0,
            date: '',
        };
    }
});
const form = ref({
    name: '',
    type: '',
    duration: 0,
    date: '',
});
const workouts = ref([]);
let nextId = 1; // Simple incremental ID
async function saveWorkout() {
    if (!form.value.name || !form.value.type || !form.value.date) {
        showSnackbar('Please fill in all required fields.', 'error');
        return;
    }
    const newWorkout = {
        name: form.value.name,
        type: form.value.type,
        duration: form.value.duration,
        date: form.value.date,
        createdAt: new Date().toISOString(),
    };
    try {
        await addDoc(collection(db, 'workouts'), newWorkout);
        workouts.value.unshift({ ...newWorkout, id: Date.now() });
        dialog.value = false;
        showSnackbar('Workout saved to Firebase!', 'success');
        form.value = { name: '', type: '', duration: 0, date: '' };
    }
    catch (err) {
        showSnackbar('Error saving workout.', 'error');
        console.error(err);
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['v-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-text']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-text']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "workout-app" },
});
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onClick': {} },
    color: "primary",
}));
const __VLS_6 = __VLS_5({
    ...{ 'onClick': {} },
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialog = true;
    }
};
__VLS_7.slots.default;
var __VLS_7;
const __VLS_12 = {}.VList;
/** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "section-title" },
});
const __VLS_16 = {}.TransitionGroup;
/** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    name: "fade",
    tag: "div",
}));
const __VLS_18 = __VLS_17({
    name: "fade",
    tag: "div",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
for (const [workout] of __VLS_getVForSourceType((__VLS_ctx.workouts))) {
    const __VLS_20 = {}.VListItem;
    /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        key: (workout.id),
        ...{ class: "mb-2" },
        ...{ style: {} },
    }));
    const __VLS_22 = __VLS_21({
        key: (workout.id),
        ...{ class: "mb-2" },
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "workout-item" },
    });
    const __VLS_24 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        icon: (__VLS_ctx.getWorkoutIcon(workout.type)),
        size: "28",
        ...{ class: "workout-icon" },
    }));
    const __VLS_26 = __VLS_25({
        icon: (__VLS_ctx.getWorkoutIcon(workout.type)),
        size: "28",
        ...{ class: "workout-icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "workout-text" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "workout-title" },
    });
    (workout.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "workout-subtitle" },
    });
    (workout.type);
    (workout.duration);
    (new Date(workout.date).toLocaleString());
    var __VLS_23;
}
var __VLS_19;
var __VLS_15;
const __VLS_28 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "500px",
    persistent: true,
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "500px",
    persistent: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
const __VLS_36 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
var __VLS_39;
const __VLS_40 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    modelValue: (__VLS_ctx.form.name),
    label: "Exercise Name",
}));
const __VLS_46 = __VLS_45({
    modelValue: (__VLS_ctx.form.name),
    label: "Exercise Name",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    modelValue: (__VLS_ctx.form.type),
    items: (['Cardio', 'Strength', 'Mobility']),
    label: "Type",
}));
const __VLS_50 = __VLS_49({
    modelValue: (__VLS_ctx.form.type),
    items: (['Cardio', 'Strength', 'Mobility']),
    label: "Type",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.form.duration),
    type: "number",
    label: "Duration (min)",
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.form.duration),
    type: "number",
    label: "Duration (min)",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    modelValue: (__VLS_ctx.form.date),
    label: "Date/Time",
    type: "datetime-local",
}));
const __VLS_58 = __VLS_57({
    modelValue: (__VLS_ctx.form.date),
    label: "Date/Time",
    type: "datetime-local",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
var __VLS_43;
const __VLS_60 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    ...{ 'onClick': {} },
    color: "green",
}));
const __VLS_70 = __VLS_69({
    ...{ 'onClick': {} },
    color: "green",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
let __VLS_72;
let __VLS_73;
let __VLS_74;
const __VLS_75 = {
    onClick: (__VLS_ctx.saveWorkout)
};
__VLS_71.slots.default;
var __VLS_71;
const __VLS_76 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    ...{ 'onClick': {} },
}));
const __VLS_78 = __VLS_77({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
let __VLS_80;
let __VLS_81;
let __VLS_82;
const __VLS_83 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialog = false;
    }
};
__VLS_79.slots.default;
var __VLS_79;
var __VLS_63;
var __VLS_35;
var __VLS_31;
var __VLS_3;
/** @type {[typeof Snackbar, ]} */ ;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(Snackbar, new Snackbar({
    modelValue: (__VLS_ctx.snackbarVisible),
    message: (__VLS_ctx.snackbarMessage),
    color: (__VLS_ctx.snackbarColor),
}));
const __VLS_85 = __VLS_84({
    modelValue: (__VLS_ctx.snackbarVisible),
    message: (__VLS_ctx.snackbarMessage),
    color: (__VLS_ctx.snackbarColor),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
/** @type {__VLS_StyleScopedClasses['workout-app']} */ ;
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-item']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-text']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-title']} */ ;
/** @type {__VLS_StyleScopedClasses['workout-subtitle']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Snackbar: Snackbar,
            getWorkoutIcon: getWorkoutIcon,
            snackbarVisible: snackbarVisible,
            snackbarMessage: snackbarMessage,
            snackbarColor: snackbarColor,
            dialog: dialog,
            form: form,
            workouts: workouts,
            saveWorkout: saveWorkout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
