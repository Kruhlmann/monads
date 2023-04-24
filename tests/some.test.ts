import { None, NoneValueException, Option, Some } from "../src";

describe("None", () => {
    let option: Option<number>;

    beforeEach(() => {
        option = new None();
    });

    it("should return the same object when calling some()", () => {
        expect(option.some(() => {})).toBe(option);
    });

    it("should call the callback when calling none()", () => {
        const callback = jest.fn();
        option.none(callback);
        expect(callback).toHaveBeenCalled();
    });

    it("should throw an exception when calling unwrap()", () => {
        expect(() => option.unwrap()).toThrowError(NoneValueException);
    });

    it("should return the fallback value when calling unwrap_or()", () => {
        expect(option.unwrap_or(123)).toBe(123);
    });

    it("should call the fallback closure when calling unwrap_or_else()", () => {
        const fallback_closure = jest.fn(() => 123);
        expect(option.unwrap_or_else(fallback_closure)).toBe(123);
        expect(fallback_closure).toHaveBeenCalled();
    });

    it("should return a new None object when calling map()", () => {
        const result = option.map(() => 123);
        expect(result).toBeInstanceOf(None);
    });

    it("should return false when calling is_some()", () => {
        expect(option.is_some()).toBe(false);
    });

    it("should return true when calling is_none()", () => {
        expect(option.is_none()).toBe(true);
    });
});

describe("Some", () => {
    let option: Option<number>;

    beforeEach(() => {
        option = new Some(123);
    });

    it("should call the callback when calling some()", () => {
        const callback = jest.fn();
        // eslint-disable-next-line unicorn/no-array-callback-reference
        option.some(callback);
        expect(callback).toHaveBeenCalledWith(123);
    });

    it("should return the same object when calling none()", () => {
        expect(option.none(() => {})).toBe(option);
    });

    it("should return the value when calling unwrap()", () => {
        expect(option.unwrap()).toBe(123);
    });

    it("should return the value when calling unwrap_or()", () => {
        expect(option.unwrap_or(456)).toBe(123);
    });

    it("should return the value when calling unwrap_or_else()", () => {
        const fallback_closure = jest.fn(() => 456);
        expect(option.unwrap_or_else(fallback_closure)).toBe(123);
        expect(fallback_closure).not.toHaveBeenCalled();
    });

    it("should return a new Some object with transformed value when calling map()", () => {
        const result = option.map((value) => value * 2);
        expect(result).toBeInstanceOf(Some);
        expect(result.unwrap()).toBe(246);
    });

    it("should return true when calling is_some()", () => {
        expect(option.is_some()).toBe(true);
    });

    it("should return false when calling is_none()", () => {
        expect(option.is_none()).toBe(false);
    });
});
