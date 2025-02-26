import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {ReadyToGetStarted} from "#components";

describe("testing ReadyToGetStarted Section", () => {
    test("testing content", async () => {
        let readyToSec = await mountSuspended(ReadyToGetStarted);
        const contactUsBtn = readyToSec.getComponent("button");
        expect(contactUsBtn.isVisible()).toBe(true);
        expect(contactUsBtn.text().toUpperCase()).toBe(
            "contact us".toUpperCase()
        );
    });
});
