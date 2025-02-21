import {mountSuspended} from "@nuxt/test-utils/runtime";
import Header from "~/components/Header.vue";
import {test, describe, expect} from "vitest";
describe("testing headerSection", () => {
    test("testing header content", async () => {
        const header = await mountSuspended(Header);
        expect(header).toBeDefined();
        expect(header.find("img").isVisible()).toBeTruthy();
        expect(header.find("img").attributes().alt).toBe("logo");
        expect(header.findAllComponents("button")[0].text()).toBe("contact us");
        expect(header.findAll("li > a")[0].attributes().href).toBe("/");
        expect(header.findAll("li > a")[1].attributes().href).toBe("/about");
    });
    test("testign aside", async () => {
        const header = await mountSuspended(Header);
        expect(header).toBeDefined();
        const sidebarOpener = header.findComponent("[title='open sidebar']");
        const sidebar = header.findComponent("aside");
        expect(sidebarOpener.isVisible()).toBe(true);
        expect(sidebar.isVisible()).toBe(true);
        expect(sidebar.classes()).toContain("translate-x-full");
        await sidebarOpener.trigger("click");
        expect(sidebar.classes()).not.toContain("translate-x-full");
        expect(sidebar.classes()).toContain("translate-x-0");
        await sidebarOpener.trigger("click");
        expect(sidebar.classes()).toContain("translate-x-full");
        expect(sidebar.classes()).not.toContain("translate-x-0 ");
    });
});
