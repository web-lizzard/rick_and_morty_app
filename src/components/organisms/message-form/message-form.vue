<script setup lang='ts'>
import CustomInput from '../../atoms/custom-input/custom-input.vue';
import CustomButton from '../../atoms/custom-button/custom-button.vue';
import CustomSelect from '../../molecules/custom-select/custom-select.vue';
import type { Options } from '../../molecules/custom-select/custom-select.types';
import { computed, reactive, ref } from 'vue';
import type { FormState } from './message-form.types'
import  { InputType } from '../../atoms/custom-input/custom-input.types'

defineProps<{
    characters: Options[]
}>()

const emit = defineEmits<{
    (e: 'add-message', message: FormState ): void
}>()

const formState: FormState = reactive({
    title: '',
    message:'',
    character: ''
})

const isSubmitting = ref(false)

const rules = computed((): FormState => {
    const formRules = {
        title: '',
        message: '',
        character: ''
    }
    if(!isSubmitting.value) return formRules
    
    formRules.title = formState.title.length < 3 
    && 'This field is too short' 
    || formState.title.length >= 36
    && 'This field is too long' 
    || formState.title.match(/\W|_/g)
    && 'Special character is not allowed' 
    || '';
    formRules.message = formState.message.length < 256 && 'This field is too short' || '';
    formRules.character = !formState.character.length && 'This field is required' || ''; 

    return formRules
})

const validateForm = () => {
    return !Object.values(rules.value).some(value => value.length);

}

const handleSubmit = () => {
    isSubmitting.value = true;
    const isValid = validateForm()
    isValid && emit('add-message', formState)
}

</script>

<template>
  {{ formState.character }}

  <form class="message-form"
        @submit.prevent="handleSubmit">
    <custom-input v-model="formState.title"
                  label="Title"
                  :error-message="rules.title" />
    
    <custom-input v-model="formState.message"
                  label="Message"
                  :error-message="rules.message"
                  :element="InputType.TEXTAREA" />
    
    <custom-select v-model="formState.character"
                   :error-message="rules.character"
                   default-button-label="Pick a character"
                   label="Character"
                   :options="characters" />
    
    <custom-button class="message-form__button"
                   type="submit">
      Submit
    </custom-button>
  </form>
</template>

<style lang='scss'>
    .message-form {
        display: flex;
        flex-direction: column;
        gap: 3.7rem;

        &__button {
            margin: 0;
            margin-top: 14rem;
            align-self: flex-end;
        }
    }

</style>