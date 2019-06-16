import { shallowMount } from "@vue/test-utils";
import Form from "@/components/Form.vue";

describe("Form.vue", () => {
	it("reveals a notification when submitted", () => {
		const wrapper = shallowMount(Form);

		wrapper.find("[data-fullname]").setValue("Adam Wright");
		wrapper.find("[data-businessname]").setValue("My Business");
		wrapper.find("[data-email]").setValue("adam.wright@yahoo.co.uk");
		wrapper.find("[data-phone]").setValue("07985602724");
		wrapper.find("form").trigger("submit.prevent");

		expect(wrapper.find(".c-contenr__form-success").exists()).toBe(false);
	});
});
