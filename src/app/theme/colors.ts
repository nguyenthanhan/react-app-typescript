const shades = {
  TRANSPARENT: 'transparent',
  MAIN: '#000000',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  PURPLE: '#3A1145',
  SILVER: '#BDBDBD',
  SILVER2: '#CCC',
  ORANGE: '#E88200',
  LIGHT_GREEN: '#C2E000',
  DARK_GREEN: '#A2C927',
  RED: '#FF0000',
  MINE_SHAFT: '#323232',
  MINE_SHAFT2: '#303030',
  YUKON_GOLD: '#666804',
  CONFETTI: '#EAEB5E',
  CURIOUS_BLUE: '#2F95DC',
  CURIOUS_BLUE2: '#158ECB',
  CORNFLOWER_BLUE: '#6195ED',
  CERULEAN: '#0C8AC9',
  TUNDORA: '#4D4D4D',
  MALIBU: '#59D7FF',
  GRAY: '#888888',
  SILVER_CHALICE: '#A3A3A3',
  DENIM: '#1489C8',
  DENIM2: '#1382BE',
  SCORPION: '#585858',
  JAZZBERRY_JAM: '#A51276',
  OBSERVATORY: '#03867F',
  BUDDHA_GOLD: '#CD9A00',
  DOVE_GRAY: '#666666',
  DODGER_BLUE: '#1A9FFF',
  SCARLET: '#FF2F00',
  PISTACHIO: '#9ACD00',
  INDIGO: '#5C6BC1',
  HOLLYWOOD_CERISE: '#E00087',
  KEPPEL: '#3EAEAD',
  DEEP_BLUSH: '#E05CA9',
  ELECTRIC_VIOLET: '#9A00CD',
  BITTER_SWEET: '#FF6A65',
  SPRING_GREEN: '#00FCB2',
  CYAN_AQUA: '#19EDFF',
  EASTERN_BLUE: '#1984BD',
  REGENT_ST_BLUE: '#ABD2E7',
  HARLEQUIN: '#30CD00',
  RED_ORANGE: '#FF2F2F',
  GALLERY: '#ECECEC',
  CREAM: '#FFFFCD',
  OUTRAGEOUS_ORANGE: '#FF6633',
  CONCRETE: '#F2F2F2',
  MERCURY: '#E9E9E9',
  MERCURY2: '#E3E3E3',
  DUSTY_GRAY: '#9C9C9C',
  MONA_LISA: '#FF9A9A',
  FOUNTAIN_BLUE: '#5AC7C6',
  ALTO: '#DADADA',
  LOCHMARA: '#0B83BF',
  SCIENCE_BLUE: '#0366D6',
  REEF: '#CCFF99',
  YOUR_PINK: '#FFCCCC',
  RAJAH: '#F9C66B',
  CHICAGO: '#5A5A58',
  LINK_WATER: '#E1EFF7',
  PEPPER_MINT: '#D2F0D2',
  BLIZZARD_BLUE: '#A4D3EB',
  BOULDER: '#777',
  GRAY_NICKEL: '#C5C5C4',
  ANAKIWA: '#8EE7FC',
  EBONY: '#0D1624',
  BIG_STONE: '#162133',
  BIG_STONE2: '#1A273C',
  SHIP_COVE: '#8598BF',
  COD_GRAY: '#191919',
  BRICK_RED: '#D22D3F',
  PASTEL_GREEN: '#78E466',
  GRAY4: '#999999',
  EBONY2: '#0A111E',
  SHARK: '#212427',
  MIRAGE: '#1C2330',
  PORT_GORE: '#1A1942',
  EBONY3: '#121B2B',
  RIVER_BED: '#475266',
  DARK_CYAN: '#009574',
  LIGHT_INPUT: '#181818',
  DARK_GRAY: '#333333',
  DARK_SILVER: '#A4ABAB',
  GREEN_ROW: 'rgba(0, 149, 116, 0.15)',
  HOLLY_APPROX: '#010D0D',
  TIBER: '#042B2B',
  TIBER2: 'rgba(0, 43, 43, 0.3)',
  WARNING: '#FCC14A',
  EDWARD: '#A4ABAB',
  ALBASTER: '#F9F9F9',
  SAFFRON_MANGO: '#FCC14A',
  HOLLY: '#010D0D',
  SWAMP: '#000F0F',
  CODD_GRAY: '#111111',
  ALTO2: '#D5D5D5',
  COD_GRAY2: '#161616',
};

const common = {
  TINT_COLOR: shades.SHIP_COVE,
};

const applied = {
  TAB_ICON_DEFAULT: shades.SILVER2,
  TAB_ICON_SELECTED: common.TINT_COLOR,
  TAB_BAR: shades.WHITE,
  ERROR_BACKGROUND: shades.RED,
  ERROR_TEXT: shades.WHITE,
  WARNING_BACKGROUND: shades.CONFETTI,
  WARNING_TEXT: shades.YUKON_GOLD,
  NOTICE_BACKGROUND: common.TINT_COLOR,
  NOTICE_TEXT: shades.WHITE,
  TEXT: shades.MINE_SHAFT,
  TEXT_HEADER: shades.TUNDORA,
  DIVIDER: shades.MERCURY,
  BACKGROUND: shades.EBONY,
  WHITE_ALPHA50: `${shades.WHITE}80`,
  WHITE_ALPHA20: `${shades.WHITE}33`,
  WHITE_ALPHA10: `${shades.WHITE}1A`,
  WHITE_ALPHA05: `${shades.WHITE}0D`,
  WHITE_ALPHA80: `${shades.WHITE}CC`,
  EBONY3_ALPHA50: `${shades.EBONY3}80`,
  BRAND_SECONDARY: shades.DARK_CYAN,
  TIBER_ALPHA50: `${shades.TIBER}80`,
};

export const COLORS_STACK = [
  shades.JAZZBERRY_JAM,
  shades.OBSERVATORY,
  shades.BUDDHA_GOLD,
  shades.DOVE_GRAY,
  shades.DODGER_BLUE,
  shades.SCARLET,
  shades.PISTACHIO,
  shades.INDIGO,
  shades.HOLLYWOOD_CERISE,
  shades.KEPPEL,
  shades.DEEP_BLUSH,
  shades.ELECTRIC_VIOLET,
];

export const COLORS_FILTER_CATEGORY = {
  A: shades.BITTER_SWEET,
  F: shades.SPRING_GREEN,
  E: shades.CYAN_AQUA,
  ALL: shades.TUNDORA,
};

export default {
  ...shades,
  ...common,
  ...applied,
};
