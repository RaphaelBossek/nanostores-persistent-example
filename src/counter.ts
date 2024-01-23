import { action, type WritableStore } from "nanostores";
import { persistentAtom } from '@nanostores/persistent'

export type PageCounter = {
    counter: number;
    epochms: number | undefined;
}

export const pagecounter = persistentAtom<PageCounter>("pagecounter:1:");

type NewCounterCallback = (store: WritableStore<PageCounter>, counter: number) => undefined;

export const changepagecounter = action<WritableStore<PageCounter>,NewCounterCallback>(pagecounter, "changepagecounter", (store, add: number) => {
    store.set({counter: store.get().counter + add, epochms: Date.now()});
});
