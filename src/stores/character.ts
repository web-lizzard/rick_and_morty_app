import axios from 'axios';
import { defineStore } from 'pinia';
import type { Options } from '@/components/molecules/custom-select/custom-select.types';
import type { Message } from '@/components/molecules/message-card/message-cars.types'
import type { FormState } from '@/components/organisms/message-form/message-form.types';
import type { Character } from '@/types';


type Store = {
    characters: Character[],
    messages: Message[],
}


export const useCharacterStore = defineStore({
    id: 'character',
    state: (): Store => ({
        characters: [],
        messages: []
    }),
    getters: {
        getSelectList(state): Options[] {
            return state.characters.map(({ name, id }) => ({
                name, 
                value: id
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
            this.characters = data.results.map(({ name, id, image }: { name: string, id: string, image: string }) => ({
                name,
                id: id.toString(),
                image
            }))
        },
        addMessage({ characterId, ...payload }: FormState) {
            const char = this.characters.find(({ id }) => id === characterId)
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



