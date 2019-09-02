import { mount } from "@vue/test-utils";
import Dialog from "@/components/Dialog.vue";

describe("Dialog", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Dialog);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("should render primary-text by default", () => {
    const wrapper = mount(Dialog);
    expect(wrapper.find(".primary-text").text()).toEqual(
      "- Omae wa Mou Shindeiru."
    );
  });

  test("should receive props text", () => {
    const wrapper = mount(Dialog, {
      propsData: {
        text: "nani?"
      }
    });
    expect(wrapper.props().text).toEqual("nani?");
  });
  test("should not show the text props by default", () => {});
  test("should show text if hidden when button clicked", () => {});
  test("should hide the text if showing when button clicked", () => {});
});
