declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean | undefined>;
    offset: {
        type: import('vue').PropType<import('../types').Numberish | null>;
        default: undefined;
    };
    target: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: undefined;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    click: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    html: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    variant: {
        type: import('vue').PropType<keyof import('../types').BaseColorVariant | null>;
        default: undefined;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('../../node_modules/@floating-ui/core').Rect | "viewport">;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('../../node_modules/@floating-ui/core').Padding>;
    };
    content: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    customClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    delay: {
        type: import('vue').PropType<number | Readonly<{
            show: number;
            hide: number;
        }>>;
        default: undefined;
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: import('../../node_modules/@floating-ui/core').Placement;
                strategy: import('../../node_modules/@floating-ui/core').Strategy;
                initialPlacement: import('../../node_modules/@floating-ui/core').Placement;
                middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('../../node_modules/@floating-ui/core').ElementRects;
                platform: import('../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noAutoClose: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noHide: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
    };
    noninteractive: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    placement: {
        type: import('vue').PropType<import('../types').PopoverPlacement>;
        default: undefined;
    };
    persistent: {
        type: import('vue').PropType<boolean>;
    };
    realtime: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    reference: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: undefined;
    };
    strategy: {
        type: import('vue').PropType<import('../../node_modules/@floating-ui/core').Strategy>;
        default: undefined;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
    interactive: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
}, {
    hide: ((e: Readonly<Event>) => void) | undefined;
    show: (() => void) | undefined;
    toggle: ((e?: Event | undefined) => void) | undefined;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean | undefined>;
    offset: {
        type: import('vue').PropType<import('../types').Numberish | null>;
        default: undefined;
    };
    target: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: undefined;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    click: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    html: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    variant: {
        type: import('vue').PropType<keyof import('../types').BaseColorVariant | null>;
        default: undefined;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('../../node_modules/@floating-ui/core').Rect | "viewport">;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('../../node_modules/@floating-ui/core').Padding>;
    };
    content: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    customClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    delay: {
        type: import('vue').PropType<number | Readonly<{
            show: number;
            hide: number;
        }>>;
        default: undefined;
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: import('../../node_modules/@floating-ui/core').Placement;
                strategy: import('../../node_modules/@floating-ui/core').Strategy;
                initialPlacement: import('../../node_modules/@floating-ui/core').Placement;
                middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('../../node_modules/@floating-ui/core').ElementRects;
                platform: import('../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noAutoClose: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noHide: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
    };
    noninteractive: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    placement: {
        type: import('vue').PropType<import('../types').PopoverPlacement>;
        default: undefined;
    };
    persistent: {
        type: import('vue').PropType<boolean>;
    };
    realtime: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    reference: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: undefined;
    };
    strategy: {
        type: import('vue').PropType<import('../../node_modules/@floating-ui/core').Strategy>;
        default: undefined;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
    interactive: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
}>>, {
    offset: import('../types').Numberish | null;
    target: string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null;
    title: string;
    click: boolean;
    id: string;
    html: boolean;
    variant: keyof import('../types').BaseColorVariant | null;
    manual: boolean;
    content: string;
    customClass: any;
    delay: number | Readonly<{
        show: number;
        hide: number;
    }>;
    floatingMiddleware: {
        name: string;
        options?: any;
        fn: (state: {
            x: number;
            y: number;
            placement: import('../../node_modules/@floating-ui/core').Placement;
            strategy: import('../../node_modules/@floating-ui/core').Strategy;
            initialPlacement: import('../../node_modules/@floating-ui/core').Placement;
            middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import('../../node_modules/@floating-ui/core').ElementRects;
            platform: import('../../node_modules/@floating-ui/core').Platform;
            elements: import('@floating-ui/vue').Elements;
        }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
    }[];
    inline: boolean;
    noAutoClose: boolean;
    noFade: boolean;
    noFlip: boolean;
    noHide: boolean;
    noShift: boolean;
    noninteractive: boolean;
    placement: import('../types').PopoverPlacement;
    realtime: boolean;
    reference: string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null;
    strategy: import('../../node_modules/@floating-ui/core').Strategy;
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
    interactive: boolean;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
