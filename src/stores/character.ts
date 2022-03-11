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
        getMessages() {
            const messages = localStorage.getItem('messages');
            if(!messages) return
            this.messages = JSON.parse(messages) 
        },

        async getCharacters() {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character')
            this.characters = data.results
        },
        addMessage({ characterId, ...payload }: FormState) {
            const char = this.characters.find(({ id }) => id == characterId)
            if(!char) return;
            const message = {
                ...payload,
                image: char.image || '',
                name: char.name,
                date: Date.now(),
                id: characterId
            }
            this.messages = [ message, ...this.messages ]


        }
    },
})



