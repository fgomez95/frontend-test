import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";
import Dialog from "~/components/Dialog.vue";

describe("Dialog", () => {
  const storeMock = {
    $store: {
      state: {
        todos: []
      },
      getters: {
        "todos/todos": []
      }
    }
  };
  test("is a Vue instance", () => {
    const wrapper = mount(Index, {
      mocks: storeMock
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("renders a dialog component", () => {
    const wrapper = mount(Index, {
      mocks: storeMock
    });
    const dialog = wrapper.find(Dialog);
    expect(dialog.is(Dialog)).toBeTruthy();
  });
});
