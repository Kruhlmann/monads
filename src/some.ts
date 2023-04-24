import { Option } from "./option";

export class Some<T> implements Option<T> {
    public constructor(protected value: T) {}

    public some(callback: (item: T) => unknown): Option<T> {
        callback(this.value);
        return this;
    }

    public none(_callback: () => unknown): Option<T> {
        return this;
    }

    public unwrap(): T {
        return this.value;
    }

    public unwrap_or(_fallback: T): T {
        return this.value;
    }

    public unwrap_or_else(_fallback_closure: () => T): T {
        return this.value;
    }

    public map<U>(transformer: (item: T) => U): Option<U> {
        return new Some(transformer(this.value));
    }

    public is_some(): boolean {
        return true;
    }

    public is_none(): boolean {
        return false;
    }
}
