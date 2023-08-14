// State เป็นฟังก์ชันที่ Return เป็น Object เก็บค่าต่างๆ
// Mutations เป็น Object ที่เก็บค่าฟังก์ชันที่จะรับ State เข้ามาเป็น Argument ตัวที่หนึ่ง และอาจจะรับค่าใหม่เข้ามาเป็น Argument ตัวที่สอง เพื่อทำการเปลี่ยนแปลงค่าต่างๆใน State.
export const state = () => ({
  lang: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    state.lang = locale;
  }
}

