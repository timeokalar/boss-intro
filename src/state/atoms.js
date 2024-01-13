import { atom } from "recoil"

export const lineOneState = atom({
  key: 'lineOne',
  default: 'Line One Default'
})

export const lineTwoState = atom({
  key: 'lineTwo',
  default: 'Line Two Default'
})

export const lineThreeState = atom({
  key: 'lineThree',
  default: 'Line Three Default'
})

export const lineFourState = atom({
  key: 'lineFour',
  default: 'Line Four Default'
})

export const firstNameState = atom({
  key: 'firstName',
  default: 'Top Text'
})

export const secondNameState = atom({
  key: 'secondName',
  default: 'Bottom Text'
})

export const bossImageState = atom({
  key: 'bossImage',
  default: []
})