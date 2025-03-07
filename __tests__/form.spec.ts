import {mountSuspended} from "@nuxt/test-utils/runtime";
import {test, describe, expect} from "vitest";
import {Form} from "#components";
import {flushPromises} from "@vue/test-utils";
import waitForExpect from "wait-for-expect";

describe("testing Form Component", () => {
    test("testing name input and check if it's empty or the length of characters provided is more than 3 and less than or equal 11", async () => {
        const wrapper = await mountSuspended(Form);
        let nameInput = wrapper.find("#name");
        await wrapper.trigger("submit");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#name + p").isVisible()).toBe(true);
            expect(wrapper.find("#name + p").text()).toBe("Required");
        });
        await nameInput.setValue("32");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#name + p").isVisible()).toBe(true);
            expect(wrapper.find("#name + p").text()).not.toBe("Required");
            expect(wrapper.find("#name + p").text()).toBe(
                "String must contain at least 3 character(s)"
            );
        });
        await nameInput.setValue("1221");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#name + p").isVisible()).toBe(true);
            expect(wrapper.find("#name + p").text()).toBe(
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
    test("testing email input and check if it's valid or not", async () => {
        const wrapper = await mountSuspended(Form);
        let emailInput = wrapper.find("#email");
        await wrapper.trigger("submit");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#email + p").isVisible()).toBe(true);
            expect(wrapper.find("#email + p").text()).toBe("Required");
        });
        await emailInput.setValue("3dasd");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#email + p").isVisible()).toBe(true);
            expect(wrapper.find("#email + p").text()).not.toBe("invalid Email");
        });
        await emailInput.setValue("eslam@gmail");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#email + p").isVisible()).toBe(true);
            expect(wrapper.find("#email + p").text()).not.toBe("invalid Email");
        });
        await emailInput.setValue("eslam@gmail.com");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#email + p").exists()).toBe(false);
            expect(emailInput.element.nextElementSibling?.id).toBe("company");
        });
    });
    test("testing company input and check if it's empty or the length of characters provided is more than 3 and less than 11", async () => {
        const wrapper = await mountSuspended(Form);
        let companyInput = wrapper.find("#company");
        await wrapper.trigger("submit");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#company + p").isVisible()).toBe(true);
            expect(wrapper.find("#company + p").text()).toBe("Required");
        });
        await companyInput.setValue("e");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#company + p").isVisible()).toBe(true);
            expect(wrapper.find("#company + p").text()).not.toBe(
                "String must contain at least 3 character(s)"
            );
        });
        await companyInput.setValue("321321");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#company + p").isVisible()).toBe(true);
            expect(wrapper.find("#company + p").text()).not.toBe(
                "Name Cannot Be a Numbers Only"
            );
        });
        await companyInput.setValue("twitter");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#company + p").exists()).toBe(false);
            expect(companyInput.element.nextElementSibling?.id).toBe("title");
        });
    });
    test("testing title input and check if it's empty or the length of characters provided is more than 3 and less than 11", async () => {
        const wrapper = await mountSuspended(Form);
        let titleInput = wrapper.find("#title");
        await wrapper.trigger("submit");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#title + p").isVisible()).toBe(true);
            expect(wrapper.find("#title + p").text()).toBe("Required");
        });
        await titleInput.setValue("e");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#title + p").isVisible()).toBe(true);
            expect(wrapper.find("#title + p").text()).not.toBe(
                "String must contain at least 3 character(s)"
            );
        });
        await titleInput.setValue("321321");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#title + p").isVisible()).toBe(true);
            expect(wrapper.find("#title + p").text()).not.toBe(
                "Name Cannot Be a Numbers Only"
            );
        });
        await titleInput.setValue("castelo");
        await flushPromises();
        await waitForExpect(() => {
            expect(wrapper.find("#title + p").exists()).toBe(false);
        });
    });
});
