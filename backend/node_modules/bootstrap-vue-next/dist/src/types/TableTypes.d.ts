import { ClassValue, ColorVariant, LiteralUnion, MaybePromise } from '.';
import { StyleValue } from 'vue';

export type TableItem<T = Record<string, unknown>> = T & {
    _rowVariant?: ColorVariant | null;
    _cellVariants?: Partial<Record<keyof T, ColorVariant>>;
    _showDetails?: boolean;
};
export declare const isTableItem: (value: unknown) => value is TableItem<Record<string, unknown>>;
export type BTableSortByOrder = 'desc' | 'asc' | undefined;
export type BTableSortBy = {
    order: BTableSortByOrder;
    key: string;
    comparer?: (a: string, b: string) => number;
};
export type BTableProviderContext = {
    sortBy: BTableSortBy[] | undefined;
    filter: string | undefined;
    currentPage: number;
    perPage: number;
};
export type BTableProvider<T> = (context: Readonly<BTableProviderContext>) => MaybePromise<T[] | undefined>;
export type TableFieldFormatter<T> = (value: unknown, key: string, item: T) => string;
export type TableFieldAttribute<T> = Record<string, unknown> | ((value: unknown, key: string, item: T) => Record<string, unknown>);
export type TableField<T = any> = {
    key: LiteralUnion<keyof T>;
    label?: string;
    headerTitle?: string;
    headerAbbr?: string;
    class?: ClassValue;
    formatter?: TableFieldFormatter<T>;
    sortable?: boolean;
    sortKey?: string;
    sortDirection?: string;
    sortByFormatted?: boolean | TableFieldFormatter<T>;
    filterByFormatted?: boolean | TableFieldFormatter<T>;
    tdClass?: ClassValue;
    thClass?: ClassValue;
    thStyle?: StyleValue;
    variant?: ColorVariant | null;
    tdAttr?: TableFieldAttribute<T>;
    thAttr?: TableFieldAttribute<T>;
    isRowHeader?: boolean;
    stickyColumn?: boolean;
};
export type TableFieldRaw<T = unknown> = T extends object ? LiteralUnion<keyof T> | TableField<T> : string | TableField;
export declare const isTableField: <T>(value: unknown) => value is TableField<T>;
export declare const isTableFieldRaw: <T>(value: unknown) => value is TableFieldRaw<T>;
export type NoProviderTypes = 'paging' | 'sorting' | 'filtering';
