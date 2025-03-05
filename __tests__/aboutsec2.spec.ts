import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {AboutSec2} from "#components";
describe("testign director cards", () => {
    test("testing content", async () => {
        let wrapper = await mountSuspended(AboutSec2);
        let cards = wrapper.findAll(".container > ul > li");
        expect(cards.length).toBe(6);
        for (let i = 0; i < cards.length; i++) {
            expect(cards[i].isVisible()).toBe(true);
        }
        expect(wrapper.get("h2").text().toLowerCase()).toBe(
            "Meet the directors".toLowerCase()
        );
    });
});
