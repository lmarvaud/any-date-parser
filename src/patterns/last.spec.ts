import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import parser from "../main";
import { nowGetter } from "./patterns";

describe("last", () => {
  beforeAll(() => {
    nowGetter.now = () =>
      new Date(Date.UTC(2020, 2 /* march */, 1, 15, 16, 0, 200));
  });
  afterAll(() => {
    nowGetter.now = () => new Date();
  });
  describe("last (unit)", () => {
    it('should handle "last year"', () => {
      const actual = parser.attempt("last year");
      const expected = {
        year: 2019,
        month: 3,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last semester"', () => {
      const actual = parser.attempt("last semester");
      const expected = {
        year: 2019,
        month: 9,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last quarter"', () => {
      const actual = parser.attempt("last quarter");
      const expected = {
        year: 2019,
        month: 12,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last month"', () => {
      const actual = parser.attempt("last month");
      const expected = {
        year: 2020,
        month: 2,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last week"', () => {
      const actual = parser.attempt("last week");
      const expected = {
        year: 2020,
        month: 2,
        day: 23,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last day"', () => {
      const actual = parser.attempt("last day");
      const expected = {
        year: 2020,
        month: 2,
        day: 29,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last hour"', () => {
      const actual = parser.attempt("last hour");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 14,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last minute"', () => {
      const actual = parser.attempt("last minute");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 15,
        minute: 15,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "last second"', () => {
      const actual = parser.attempt("last second");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 15,
        minute: 15,
        second: 59,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("next (unit)", () => {
    it('should handle "next year"', () => {
      const actual = parser.attempt("next year");
      const expected = {
        year: 2021,
        month: 3,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next semester"', () => {
      const actual = parser.attempt("next semester");
      const expected = {
        year: 2020,
        month: 9,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next quarter"', () => {
      const actual = parser.attempt("next quarter");
      const expected = {
        year: 2020,
        month: 6,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next month"', () => {
      const actual = parser.attempt("next month");
      const expected = {
        year: 2020,
        month: 4,
        day: 1,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next week"', () => {
      const actual = parser.attempt("next week");
      const expected = {
        year: 2020,
        month: 3,
        day: 8,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next day"', () => {
      const actual = parser.attempt("next day");
      const expected = {
        year: 2020,
        month: 3,
        day: 2,
        hour: 15,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next hour"', () => {
      const actual = parser.attempt("next hour");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 16,
        minute: 16,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next minute"', () => {
      const actual = parser.attempt("next minute");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 15,
        minute: 17,
        second: 0,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle "next second"', () => {
      const actual = parser.attempt("next second");
      const expected = {
        year: 2020,
        month: 3,
        day: 1,
        hour: 15,
        minute: 16,
        second: 1,
        millisecond: 200,
      };
      expect(actual).toEqual(expected);
    });
  });
});
