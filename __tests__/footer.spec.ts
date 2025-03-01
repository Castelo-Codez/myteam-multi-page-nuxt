import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {Footer} from "#components";

describe("testing footer component", () => {
    test("testing content", async () => {
        const footerSec = await mountSuspended(Footer);
        expect(footerSec.isVisible()).toBe(true);
        expect(footerSec.get("img").attributes().alt).toBe("logo");
        expect(
            footerSec.get("address").text().toLowerCase().split(" ")
        ).toContain("Hillcrest".toLowerCase());
    });
});
