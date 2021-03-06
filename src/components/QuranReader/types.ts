export enum ReadingView {
  Translation = 'translation', // Displays verse by verse with translation
  QuranPage = 'quranPage', // Displays the Quran text only similar to a physical Quran page
}

export enum QuranFont {
  Uthmani = 'uthmani',
  Madani = 'madani',
  IndoPak = 'indopak',
}

export default { ReadingView, QuranFont };
