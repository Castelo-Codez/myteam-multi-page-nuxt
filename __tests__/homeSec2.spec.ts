import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {HomeSec2} from "#components";
describe("testing section 2 of home page", () => {
    test("testing content", async () => {
        let homeSec2 = await mountSuspended(HomeSec2);
        expect(
            homeSec2.getComponent(".container > article").get("p").isVisible()
        ).toBeDefined();
        expect(
            homeSec2
                .getComponent(".container > article")
                .get("p")
                .text()
                .split(" ")
        ).toContain("distributed");
        expect(homeSec2.get(".container > ul").findAll("li").length).toBe(3);
    });
});
