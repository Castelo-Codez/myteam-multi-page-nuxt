import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {AboutSec1} from "#components";

describe("testing AboutSec 1", () => {
    test("testing content", async () => {
        const aboutSec1 = await mountSuspended(AboutSec1);
        expect(aboutSec1.get("h1").text().toLowerCase()).toBe(
            "About".toLowerCase()
        );
        expect(
            aboutSec1.get("article").get("p").text().toLowerCase().split(" ")
        ).toContain("dynamic".toLowerCase());
    });
});
