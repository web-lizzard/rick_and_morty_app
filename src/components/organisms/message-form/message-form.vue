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
    content:'',
    characterId: ''
})

const isSubmitting = ref(false)

const rules = computed((): FormState => {
    const formRules = {
        title: '',
        content: '',
        characterId: ''
    }
    if(!isSubmitting.value) return formRules
    
    formRules.title = formState.title.length < 3 
    && 'This field is too short' 
    || formState.title.length >= 36
    && 'This field is too long' 
    || !formState.title.match(/^[a-zA-Z\s]*$/g)
    && 'Special character is not allowed' 
    || '';
    formRules.content = formState.content.length > 256 && 'This field is too long' || '';
    formRules.characterId = !formState.characterId.length && 'This field is required' || ''; 

    return formRules
})

const validateForm = () => {
    return !Object.values(rules.value).some(value => value.length);

}

const handleSubmit = () => {
    isSubmitting.value = true;
    const isValid = validateForm()
    if(!isValid) return
    emit('add-message', formState);
    isSubmitting.value = false;
    Object.assign(formState, reactive({ title: '', characterId: '', content: '' }))

}

</script>

<template>
  <form class="message-form"
        @submit.prevent="handleSubmit">
    <custom-input v-model="formState.title"
                  label="Title"
                  :error-message="rules.title"
                  placeholder="Enter title here" />
                
    
    <custom-input v-model="formState.content"
                  label="Message"
                  :error-message="rules.content"
                  :element="InputType.TEXTAREA" 
                  placeholder="Enter message here" />
    
    <custom-select v-model="formState.characterId"
                   :error-message="rules.characterId"
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
            margin-top: 12rem;
            align-self: flex-end;
        }
    }

</style>