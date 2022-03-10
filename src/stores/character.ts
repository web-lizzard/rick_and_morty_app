import type { Options } from '@/components/molecules/custom-select/custom-select.types';
import type { FormState } from '@/components/organisms/message-form/message-form.types';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore({
    id: 'character',
    state: () => ({
        characters: [],
        messages: []
    }),
    getters: {
        getSelectList(state): Options[] {
            return state.characters.map(({ name, id }) => ({
                name, 
                value: id.toString(),
            }))
        }
    },
    actions: {
        async getCharacters() {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character')
            this.characters = data.results
        },
        addMessage({ character, ...payload }: FormState) {
            const char = this.characters.find(({ id }) => id == character)
            if(!char) return;
            const message = {
                ...payload,
                image: char.image || '',
                name: char.name,
                date: new Date()
            }
            const messages = JSON.parse(localStorage.getItem('messages') as string) || [...this.messages];
            this.messages = [ message, ...messages ]
            localStorage.setItem('messages', JSON.stringify(this.messages))


        }
    },
})



