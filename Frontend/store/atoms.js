import recoil, { atom } from 'recoil'

export const collapse = atom({
    key: "collapseAtom",
    default: false
});
