import { ref } from 'vue'


export const useOpenElement = () => {
    const isOpen = ref(false)

    const openElement = () => {
        isOpen.value = true;
    }

    const closeElement = () => {
        isOpen.value = false
    }

    return {
        isOpen,
        closeElement,
        openElement
    }
}