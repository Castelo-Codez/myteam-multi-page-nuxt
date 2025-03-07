import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {Form} from "#components";
import {flushPromises} from "@vue/test-utils";
import waitForExpect from "wait-for-expect";

describe("testing Form Component", () => {
    test("testing name input and check if it's empty or the length of characters provided it is more than 3 and less than or equal 11", async () => {
        const wrapper = await mountSuspended(Form);
        let nameInput = wrapper.get("#name");
        await wrapper.trigger("submit");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.get("#name + p").isVisible()).toBe(true);
            expect(wrapper.get("#name + p").text()).toBe("Required");
        });
        await nameInput.setValue("32");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.get("#name + p").isVisible()).toBe(true);
            expect(wrapper.get("#name + p").text()).not.toBe("Required");
            expect(wrapper.get("#name + p").text()).toBe(
                "String must contain at least 3 character(s)"
            );
        });
        await nameInput.setValue("1221");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#name + p").isVisible()).toBe(true);
            expect(wrapper.get("#name + p").text()).toBe(
                "Name Cannot Be a Numbers Only"
            );
        });
        await nameInput.setValue("eslam12132");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#name + p").exists()).toBe(false);
            expect(nameInput.element.nextElementSibling?.id).toBe("email");
        });
    });
});
