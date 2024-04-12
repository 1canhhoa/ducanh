import 'server-only'

const dictionaries = {
  vi: () =>
    import('../../dictionaries/vn.json').then((module) => module.default),
  en: () =>
    import('../../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  switch (locale) {
    case 'vi':
      return dictionaries.vi()
    case 'en':
      return dictionaries.en()
    default:
      return dictionaries.vi()
  }
}
