import { Placement as OriginalPlacement } from '@floating-ui/vue';
import { BvTriggerableEvent } from '../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    offset: {
        type: import('vue').PropType<import('../types').Numberish | null>;
        default: null;
    };
    target: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: null;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    click: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    html: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: import('vue').PropType<keyof import('../types').BaseColorVariant | null>;
        default: null;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('@floating-ui/vue').Rect | "viewport">;
        default: string;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('@floating-ui/vue').Padding>;
        default: undefined;
    };
    content: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    customClass: {
        type: import('vue').PropType<any>;
        default: string;
    };
    delay: {
        type: import('vue').PropType<number | Readonly<{
            show: number;
            hide: number;
        }>>;
        default: () => {
            show: number;
            hide: number;
        };
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: OriginalPlacement;
                strategy: import('@floating-ui/vue').Strategy;
                initialPlacement: OriginalPlacement;
                middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('@floating-ui/vue').ElementRects;
                platform: import('../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noAutoClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHide: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noninteractive: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../types').PopoverPlacement>;
        default: string;
    };
    persistent: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    realtime: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    reference: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: null;
    };
    strategy: {
        type: import('vue').PropType<import('@floating-ui/vue').Strategy>;
        default: string;
    };
    tooltip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
}, {
    hide: (e: Readonly<Event>) => void;
    show: () => void;
    toggle: (e?: Event | undefined) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: (value: BvTriggerableEvent) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    offset: {
        type: import('vue').PropType<import('../types').Numberish | null>;
        default: null;
    };
    target: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: null;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    click: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    html: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: import('vue').PropType<keyof import('../types').BaseColorVariant | null>;
        default: null;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    boundary: {
        type: import('vue').PropType<Element | "document" | "clippingAncestors" | Element[] | import('@floating-ui/vue').Rect | "viewport">;
        default: string;
    };
    boundaryPadding: {
        type: import('vue').PropType<import('@floating-ui/vue').Padding>;
        default: undefined;
    };
    content: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    customClass: {
        type: import('vue').PropType<any>;
        default: string;
    };
    delay: {
        type: import('vue').PropType<number | Readonly<{
            show: number;
            hide: number;
        }>>;
        default: () => {
            show: number;
            hide: number;
        };
    };
    floatingMiddleware: {
        type: import('vue').PropType<{
            name: string;
            options?: any;
            fn: (state: {
                x: number;
                y: number;
                placement: OriginalPlacement;
                strategy: import('@floating-ui/vue').Strategy;
                initialPlacement: OriginalPlacement;
                middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
                rects: import('@floating-ui/vue').ElementRects;
                platform: import('../../node_modules/@floating-ui/core').Platform;
                elements: import('@floating-ui/vue').Elements;
            }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
        }[]>;
        default: undefined;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noAutoClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noFlip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noHide: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noShift: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noSize: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noninteractive: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../types').PopoverPlacement>;
        default: string;
    };
    persistent: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    realtime: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    reference: {
        type: import('vue').PropType<string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null>;
        default: null;
    };
    strategy: {
        type: import('vue').PropType<import('@floating-ui/vue').Strategy>;
        default: string;
    };
    tooltip: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportDisabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    teleportTo: {
        type: import('vue').PropType<string | import('vue').RendererElement | null>;
        default: undefined;
    };
}>> & {
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    offset: import('../types').Numberish | null;
    target: string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null;
    title: string;
    click: boolean;
    id: string;
    html: boolean;
    variant: keyof import('../types').BaseColorVariant | null;
    manual: boolean;
    boundary: Element | "document" | "clippingAncestors" | Element[] | import('@floating-ui/vue').Rect | "viewport";
    boundaryPadding: import('@floating-ui/vue').Padding;
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
            placement: OriginalPlacement;
            strategy: import('@floating-ui/vue').Strategy;
            initialPlacement: OriginalPlacement;
            middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import('@floating-ui/vue').ElementRects;
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
    noSize: boolean;
    noninteractive: boolean;
    placement: import('../types').PopoverPlacement;
    persistent: boolean;
    realtime: boolean;
    reference: string | Readonly<HTMLElement> | Readonly<import('vue').ComponentPublicInstance> | null;
    strategy: import('@floating-ui/vue').Strategy;
    tooltip: boolean;
    teleportDisabled: boolean;
    teleportTo: string | import('vue').RendererElement | null;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    target?: ((props: {
        show: () => void;
        hide: (e: Event) => void;
        toggle: (e: Event) => void;
        showState: boolean;
    }) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    target?: ((props: {
        show: () => void;
        hide: (e: Event) => void;
        toggle: (e: Event) => void;
        showState: boolean;
    }) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
