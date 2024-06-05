import { ComponentInternalInstance, Ref } from 'vue';

export declare const useSharedModalStack: () => {
    dispose: (modal: Readonly<ComponentInternalInstance>) => void;
    stack?: import('vue').ShallowRef<Readonly<ComponentInternalInstance>[]> | undefined;
    countStack?: Readonly<Ref<number>> | undefined;
    lastStack?: Readonly<Ref<ComponentInternalInstance | undefined>> | undefined;
    pushStack?: ((modal: Readonly<ComponentInternalInstance>) => void) | undefined;
    removeStack?: ((modal: Readonly<ComponentInternalInstance>) => void) | undefined;
    registry?: import('vue').ShallowRef<Readonly<ComponentInternalInstance>[]> | undefined;
    pushRegistry?: ((modal: Readonly<ComponentInternalInstance>) => void) | undefined;
    removeRegistry?: ((modal: Readonly<ComponentInternalInstance>) => void) | undefined;
};
declare const _default: (modalOpen: Readonly<Ref<boolean>>) => {
    activePosition: import('vue').ComputedRef<number | undefined>;
    activeModalCount: Readonly<Ref<number>> | undefined;
};
export default _default;
