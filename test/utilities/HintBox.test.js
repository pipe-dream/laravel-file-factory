import { mount } from "@vue/test-utils";
import HintBox from "utilities/HintBox.vue";

describe('HintBox component', () => {

    const HINT_MESSAGE = 'Hi I am a hint message';

    test('it should render message hint', () => {
        const wrapper = mount(HintBox, {
            propsData: {
                message: HINT_MESSAGE,
            },
        });
        const vm = wrapper.vm;

        expect(vm.$props.message)
            .toBe(HINT_MESSAGE);
        expect(wrapper.find('div').text())
            .toBe(HINT_MESSAGE);
    });

});
