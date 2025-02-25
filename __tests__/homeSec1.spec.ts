import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {HomeSec1} from "#components";
describe("testing section 1 of home page", () => {
    test("testing content", async () => {
        const homeSec1 = await mountSuspended(HomeSec1);
        expect(homeSec1.get("h1").text()).toBe("Find the best  talent");
        const searchKeywords = ["global", "abundance", "performing", "that."];
        for (let i = 0; i < searchKeywords.length; i++) {
            expect(
                homeSec1.get("article").get("p").text().split(" ")
            ).toContain(searchKeywords[i] as string);
        }
    });
});
