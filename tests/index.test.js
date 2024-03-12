
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("a number", async () => {
        expect(testFunc(123)).toBeUndefined();
    });

    test("a string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });
});

describe("check colour fading", () => {
    test("black to white", () => {
        expect(testFunc([0, 0, 0], 100)).toEqual([255, 255, 255]);
    });

    test("black to white preserving alpha channel", () => {
        expect(testFunc([0, 0, 0, 0.5], 100)).toEqual([255, 255, 255, 0.5]);
    });

    test("white to black", () => {
        expect(testFunc([255, 255, 255], -100)).toEqual([0, 0, 0]);
    });

    test("white to black preserving alpha channel", () => {
        expect(testFunc([255, 255, 255, 0.5], -100)).toEqual([0, 0, 0, 0.5]);
    });

    test("darken 50%", () => {
        expect(testFunc([200, 100, 50], -50)).toEqual([100, 50, 25]);
    });

    test("lighten 50%", () => {
        expect(testFunc([55, 155, 205], 10)).toEqual([75, 165, 210]);
    });
});
