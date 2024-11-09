import { defineStore } from "pinia"

export const usePriceCard = defineStore('priceCard', () => {
    const cardName = ref("bigCard")
    function setCardName(value: string) {
        cardName.value = value
    }

    return { cardName, setCardName }
})