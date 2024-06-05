declare const _default: () => {
    hide: (trigger?: string) => void;
    hideAll: (trigger?: string) => void;
    modals?: import('vue').ShallowRef<import('vue').ComputedRef<{
        component: unknown;
        props: import('../types').OrchestratedModal & {
            _self: symbol;
            _modelValue: boolean | undefined;
            _promise: {
                value: Promise<boolean | null>;
                resolve: (value: boolean | null) => void;
            };
            _isConfirm: boolean;
        };
    }>[]> | undefined;
    show?: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../types').OrchestratedModal>> | undefined;
    }) => Promise<boolean | null>) | undefined;
    confirm?: ((obj: {
        component?: Readonly<import('vue').Component> | undefined;
        props?: import('vue').MaybeRefOrGetter<Readonly<import('../types').OrchestratedModal>> | undefined;
    }) => Promise<boolean | null>) | undefined;
    remove?: ((self: symbol) => void) | undefined;
};
export default _default;
