import { NoneValueException } from "./none_value_exception";
import { Option } from "./option";

export class None<T> implements Option<T> {
    public some(_callback: (item: T) => unknown): Option<T> {
        return this;
    }

    public none(callback: () => unknown): Option<T> {
        callback();
        return this;
    }

    public unwrap(): T {
        throw new NoneValueException();
    }

    public unwrap_or(fallback: T): T {
        return fallback;
    }

    public unwrap_or_else(fallback_closure: () => T): T {
        return fallback_closure();
    }

    public map<U>(_transformer: (item: T) => U): Option<U> {
        return new None();
    }

    public is_some(): boolean {
        return false;
    }

    public is_none(): boolean {
        return true;
    }
}
