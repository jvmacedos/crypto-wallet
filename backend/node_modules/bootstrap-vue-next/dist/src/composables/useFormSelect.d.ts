import { MaybeRefOrGetter } from 'vue';
import { SelectOption } from '../types';

declare const _default: (options: MaybeRefOrGetter, props: Record<string, unknown>) => {
    normalizedOptions: import('vue').ComputedRef<(Readonly<{
        label: string;
        options: readonly import('../types').SelectOptionRaw<unknown>[];
    }> | SelectOption<unknown>)[]>;
    isComplex: (option: unknown) => option is Readonly<{
        label: string;
        options: readonly import('../types').SelectOptionRaw<unknown>[];
    }>;
};
export default _default;
