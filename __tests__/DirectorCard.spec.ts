import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {DirectorCard} from "#components";

describe("testing director card", () => {
    test("testing content", async () => {
        let wrapper = await mountSuspended(DirectorCard, {
            props: {
                director: "Cruz Hamer",
                quote: "Technology is at the forefront of enabling distributed teams. That's where we come in.",
                position: "Co-founder & CTO",
            },
        });
        expect(wrapper.get("img").attributes().alt).toBe(`Cruz Hamer avatar`);
        expect(wrapper.get("article").get("h4").text()).toBe("Cruz Hamer");
        expect(wrapper.get("article").get("h5").text()).toBe(
            "Co-founder & CTO"
        );
    });
    test("check when clicking the plus button the back card is Visible and the front back is invisible", async () => {
        let wrapper = await mountSuspended(DirectorCard, {
            props: {
                director: "Cruz Hamer",
                quote: "Technology is at the forefront of enabling distributed teams. That's where we come in.",
                position: "Co-founder & CTO",
            },
        });
        await wrapper.get("button").trigger("click");
        expect(wrapper.get("li > section").classes()).toContain(
            "-rotate-y-180"
        ); // Card is Already Filpped
        expect(wrapper.get("q").isVisible()).toBeTruthy();
        expect(wrapper.get("q").text().includes("forefront")).toBe(true);
    });
});
