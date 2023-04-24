export interface Option<T> {
    some(callback: (item: T) => unknown): Option<T>;
    none(callback: () => unknown): Option<T>;
    unwrap(): T;
    unwrap_or(fallback: T): T;
    unwrap_or_else(fallback_closure: () => T): T;
    map<U>(transformer: (item: T) => U): Option<U>;
    is_some(): boolean;
    is_none(): boolean;
}
