export const albums = [
  {
    id: "123",
    title: "Lover",
    artist: "Taylor Swift",
    thumbnail:
      "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
  },
  {
    id: "1232",
    title: "Lover 2",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61KDZKrU2iL.jpg",
  },
  {
    id: "1233",
    title: "Lover 3",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
  },

  {
    id: "12334",
    title: "Lover 3",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
  },

  {
    id: "12313",
    title: "Lover 3",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
  },
];

export const avatar =
  "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export const bg = "https://www.nawpic.com/media/2020/avatar-nawpic-3.jpg";
export const routes = [
  { name: "Browser", route: "Browser", icon: "library-music" },
  { name: "Artists", route: "Artists", icon: "people-alt" },

  { name: "Genres", route: "Genres", icon: "music-note" },
  { name: "My Music", route: "MyMusic", icon: "headset" },
];
export const repeatState = {
  NULL: "NULL",
  ONE: "ONE",
  ALWAYS: "ALWAYS",
};

export const tabs = [
  { name: "All", tabName: "all" },
  { name: "Trendings", tabName: "trendings" },
  { name: "Albums", tabName: "albums" },
  { name: "Alls", tabName: "allss" },
  { name: "Trendingss", tabName: "trendingsss" },
  { name: "Albumss", tabName: "albumsss" },
];
export const thumbnailPlaylists = [
  {
    id: "12223",
    title: "Lover",
    artists: [
      {
        id: "aascascsfb143",
        name: "Taylor Swift",
      },
      {
        id: "aascascasfb143",
        name: "Halen Swift",
      },
    ],
    url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
  },
  {
    id: "1232",
    title: "Lover 2",
    artists: [
      {
        id: "aascascassfb143",
        name: "Taylor Swift",
      },
      {
        id: "aascassscasfb143",
        name: "Halen ",
      },
    ],
    url: "https://m.media-amazon.com/images/I/61KDZKrU2iL.jpg",
  },
  {
    id: "1233",
    title: "Lover 3",
    artists: [
      {
        id: "assssssssssacsc123",
        name: "Swift",
      },
      {
        id: "aascasascrgcasfb143",
        name: "Halen Swift",
      },
    ],
    url: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
  },
];

export const trendingData = [
  {
    id: "12223",
    title: "Lover",
    artist: "Taylor Swift",
    thumbnail:
      "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
  },
  {
    id: "1232",
    title: "Lover 2",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61KDZKrU2iL.jpg",
  },
  {
    id: "1233",
    title: "Lover 3",
    artist: "Taylor Swift",
    thumbnail: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
  },
];

export const bgHome = require("../assets/home.png");

export const discCard = {
  id: "1233",
  title: "Lover 3",
  artist: "Taylor Swift",
  thumbnail: "https://m.media-amazon.com/images/I/61CUQN4JxtL.jpg",
};

export const fontMap = {
  DancingScript: require(`../assets/fonts/DancingScript/DancingScript-Regular.ttf`),
  "Montserrat-Thin": require("../assets/fonts/Montserrat/Montserrat-Thin.ttf"),
  "Montserrat-ExtraLight": require("../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf"),
  "Montserrat-Medium": require("../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
  "Montserrat-SemiBold": require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
};

export const featureRowInHomeScreen = [];

export const TRACK_PLAYER_STATUS = {
  NULL: "NULL",
  PLAYING: "PLAYING",
};

export const SET_PLAYLIST_IS_PLAYING = "SET_PLAYLIST_IS_PLAYING";
export const RESET_PLAYLIST_IS_PLAYING = "RESET_PLAYLIST_IS_PLAYING";

import { Dimensions, Platform } from "react-native";

export const KLMN = Platform.OS === "ios" ? "KLMN-Flash-Pix" : "KLMN_Flash_Pix";
export const Dolbak = Platform.OS === "ios" ? "The Dolbak" : "TheDolbak-Brush";
export const Etna = Platform.OS === "ios" ? "Etna" : "etna-free-font";
export const Narrow = "3270Narrow";

export const win = Dimensions.get("window");
export const W = win.width;
export const H = win.height;
export const header_H = 60;
export const screen_H = H - header_H;
export const getPrecentOfWidth = (num) => (num / 100) * W;
export const getPrecentOfHeight = (num) => (num / 100) * H;

export const Device = {
  // eslint-disable-next-line
  select(variants) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {};
    if (W >= 315 && W <= 341) return variants.mobile315 || {};
    if (W >= 342 && W <= 359) return variants.mobile342 || {};
    if (W >= 360 && W <= 374) return variants.mobile360 || {};
    if (W >= 375 && W <= 399) return variants.mobile375 || {};
    if (W >= 400 && W <= 409) return variants.mobile400 || {};
    if (W >= 410 && W <= 414) return variants.mobile410 || {};
    if (W >= 415 && W <= 480) return variants.mobile415 || {};
    if (W >= 481) return variants.mobile481 || {};
  },
};

export const keyExtractor = (item, index) => index.toString();
export const generateRandomId = () => Math.random().toString(36).substr(2, 8);

export const goBack = (navigation) => () => navigation.goBack();

export const onScreen =
  (screen, navigation, obj = {}) =>
  () => {
    navigation.navigate(screen, { screenProps: obj });
  };

export const goHome = (navigation) => () => navigation.popToTop()();

export const isString = (param) => typeof param === "string";
export const isObjectEmpty = (obj = {}) => Object.keys(obj).length === 0;

export const formatToILDate = (timeStamp = Date.now()) =>
  new Date(timeStamp).toLocaleDateString("he-IL");

export const getAge = (dateString) => {
  if (dateString) {
    const mmddyyyy = formatFromILDate(dateString);
    var today = new Date();
    var birthDate = new Date(mmddyyyy);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return "";
};

export const formatFromILDate = (dateString) => {
  return new Date(
    `${dateString.split(/[\s./]+/)[1]}/${dateString.split(/[\s./]+/)[0]}/${
      dateString.split(/[\s./]+/)[2]
    }`
  );
};

/* Colors: */

export const gray = "#00000033";
export const lightGray = "#F3F3F3";
export const lightBlack = "#0000007F";
export const black = "#000000";
export const blue = "#B1CEF3";
export const lightBlue = "#DBEBFF";
export const red = "#FF8B9E";
export const lightRed = "#FFDFE4";
export const green = "#5DBFA6";
export const lightGreen = "#D6F3E1";
export const yellow = "#F2DB48";
export const white = "#FFFFFF";

// shadow
export const mainShadow = {
  shadowOpacity: 5,
  shadowOffset: {
    width: 0,
    height: 8,
  },
  elevation: 10,
};

/* Font/text values */
const fontFamilyArimo = "Arimo";
const fontStyleNormal = "normal";
const fontWeightNormal = "700";
const fontSize_10 = 10;
const fontSize_12 = 12;
const fontSize_15 = 15;
const fontSize_16 = 16;
const fontSize_17 = 17;
const fontSize_20 = 20;
const characterSpacing_0 = 0;
const lineSpacing_11 = 11;
const lineSpacing_16 = 16;
const lineSpacing_18 = 18;
const lineSpacing_20 = 20;
const lineSpacing_21 = 21;
const lineSpacing_22 = 22;
const lineSpacing_28 = 28;

/* Character Styles */
export const G_Styles = {
  section: {
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: white,
    // // shadowColor: '#00000029',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 16,

    // elevation: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightBlue,
    overflow: "hidden",
    borderRadius: 16,
    borderColor: white,
  },
  mainTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_20,
    lineHeight: lineSpacing_28,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  title: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_17,
    lineHeight: lineSpacing_22,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  itemTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_15,
    lineHeight: lineSpacing_22,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  caption: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: lightBlack,
  },
  redIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: red,
  },
  grayIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: gray,
  },
  greenIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: green,
  },
  blueIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: blue,
  },
  blackIcon: {
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  headerIcon: {
    fontSize: fontSize_16,
    lineHeight: lineSpacing_20,
    letterSpacing: characterSpacing_0,
    color: black,
  },

  subTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_12,
    lineHeight: lineSpacing_16,
    letterSpacing: characterSpacing_0,
    color: lightBlack,
  },
  navigationText: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_10,
    lineHeight: lineSpacing_11,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  buttonTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_16,
    lineHeight: lineSpacing_18,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  sectionTitle: {
    fontFamily: fontFamilyArimo,
    fontStyle: fontStyleNormal,
    fontWeight: fontWeightNormal,
    fontSize: fontSize_16,
    lineHeight: lineSpacing_21,
    letterSpacing: characterSpacing_0,
    color: black,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 5,
  },
};
export const artistInfo = {
  data: {
    external_urls: {
      spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
    },
    followers: {
      href: null,
      total: 4094619,
    },
    genres: ["v-pop", "vietnamese melodic rap"],
    href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
    id: "5dfZ5uSmzR7VQK0udbAVpf",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6761610000e5eb1036554ddc5f791a4f5dcfc3",
        width: 640,
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/ab676161000051741036554ddc5f791a4f5dcfc3",
        width: 320,
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/ab6761610000f1781036554ddc5f791a4f5dcfc3",
        width: 160,
      },
    ],
    name: "Sơn Tùng M-TP",
    popularity: 61,
    type: "artist",
    uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
  },
};
export const topTracksOfArtist = {
  data: {
    tracks: [
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP2 ",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6oT0WOEPWOxsa2Vmnkxwxa",
          },
          href: "https://api.spotify.com/v1/albums/6oT0WOEPWOxsa2Vmnkxwxa",
          id: "6oT0WOEPWOxsa2Vmnkxwxa2",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e025888c34015bebbf123957f6d",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048515888c34015bebbf123957f6d",
              width: 64,
            },
          ],
          name: "Chúng Ta Của Hiện Tại 22233332",
          release_date: "2020-12-20",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:6oT0WOEPWOxsa2Vmnkxwxa",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP 2",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 301538,
        explicit: false,
        external_ids: {
          isrc: "DGA062020720",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/17iGUekw5nFt5mIRJcUm3R",
        },
        href: "https://api.spotify.com/v1/tracks/17iGUekw5nFt5mIRJcUm3R",
        id: "17iGUekw5nFt5mIRJcUm3R",
        is_local: false,
        is_playable: true,
        name: "Chúng Ta Của Hiện Tại 222",
        popularity: 58,
        preview_url:
          "https://p.scdn.co/mp3-preview/9997b44ecaa0a40925be9ac2105fb842fb2ffbc1?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:17iGUekw5nFt5mIRJcUm3R",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6oT0WOEPWOxsa2Vmnkxwxa",
          },
          href: "https://api.spotify.com/v1/albums/6oT0WOEPWOxsa2Vmnkxwxa",
          id: "6oT0WOEPWOxsa2Vmnkxwxa",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e025888c34015bebbf123957f6d",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048515888c34015bebbf123957f6d",
              width: 64,
            },
          ],
          name: "Chúng Ta Của Hiện Tại",
          release_date: "2020-12-20",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:6oT0WOEPWOxsa2Vmnkxwxa",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 301538,
        explicit: false,
        external_ids: {
          isrc: "DGA062020720",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/17iGUekw5nFt5mIRJcUm3R",
        },
        href: "https://api.spotify.com/v1/tracks/17iGUekw5nFt5mIRJcUm3R",
        id: "17iGUekw5nFt5mIRJcUm3R",
        is_local: false,
        is_playable: true,
        name: "Chúng Ta Của Hiện Tại",
        popularity: 58,
        preview_url:
          "https://p.scdn.co/mp3-preview/9997b44ecaa0a40925be9ac2105fb842fb2ffbc1?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:17iGUekw5nFt5mIRJcUm3R",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/33Iz5SghJnJ9iM0xIWCS3M",
          },
          href: "https://api.spotify.com/v1/albums/33Iz5SghJnJ9iM0xIWCS3M",
          id: "33Iz5SghJnJ9iM0xIWCS3M",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27329f906fe7a60df7777b02ee1",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0229f906fe7a60df7777b02ee1",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485129f906fe7a60df7777b02ee1",
              width: 64,
            },
          ],
          name: "Muộn Rồi Mà Sao Còn",
          release_date: "2021-04-29",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:33Iz5SghJnJ9iM0xIWCS3M",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 275905,
        explicit: false,
        external_ids: {
          isrc: "FR96X2124024",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5fFLotKS1286huYIMQHqz7",
        },
        href: "https://api.spotify.com/v1/tracks/5fFLotKS1286huYIMQHqz7",
        id: "5fFLotKS1286huYIMQHqz7",
        is_local: false,
        is_playable: true,
        name: "Muộn Rồi Mà Sao Còn",
        popularity: 57,
        preview_url:
          "https://p.scdn.co/mp3-preview/9058251a69fce418f5485245f44f7cf33ec3b009?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:5fFLotKS1286huYIMQHqz7",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7aqlLOsEHnLv8XPBs05iOJ",
          },
          href: "https://api.spotify.com/v1/albums/7aqlLOsEHnLv8XPBs05iOJ",
          id: "7aqlLOsEHnLv8XPBs05iOJ",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273754d0b74f5f7eb1f109114f3",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02754d0b74f5f7eb1f109114f3",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851754d0b74f5f7eb1f109114f3",
              width: 64,
            },
          ],
          name: "CHẠY NGAY ĐI (Onionn Remix)",
          release_date: "2018-07-05",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:7aqlLOsEHnLv8XPBs05iOJ",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/25M5YMbLCbYDSFPhQXYE8c",
            },
            href: "https://api.spotify.com/v1/artists/25M5YMbLCbYDSFPhQXYE8c",
            id: "25M5YMbLCbYDSFPhQXYE8c",
            name: "Onionn.",
            type: "artist",
            uri: "spotify:artist:25M5YMbLCbYDSFPhQXYE8c",
          },
        ],
        disc_number: 1,
        duration_ms: 230400,
        explicit: false,
        external_ids: {
          isrc: "FR59R1822837",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3ZYrI2prWaAm1RbpCqZzlO",
        },
        href: "https://api.spotify.com/v1/tracks/3ZYrI2prWaAm1RbpCqZzlO",
        id: "3ZYrI2prWaAm1RbpCqZzlO",
        is_local: false,
        is_playable: true,
        name: "CHẠY NGAY ĐI - Onionn Remix",
        popularity: 55,
        preview_url:
          "https://p.scdn.co/mp3-preview/3894c8a85c19d78f101b5ca9eed770da431a6ee1?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:3ZYrI2prWaAm1RbpCqZzlO",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5hxm3ulOLVvjFdZNFO3n4M",
          },
          href: "https://api.spotify.com/v1/albums/5hxm3ulOLVvjFdZNFO3n4M",
          id: "5hxm3ulOLVvjFdZNFO3n4M",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273af31997b23b7e6e65de1816b",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02af31997b23b7e6e65de1816b",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851af31997b23b7e6e65de1816b",
              width: 64,
            },
          ],
          name: "m-tp M-TP",
          release_date: "2017-04-01",
          release_date_precision: "day",
          total_tracks: 18,
          type: "album",
          uri: "spotify:album:5hxm3ulOLVvjFdZNFO3n4M",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 293112,
        explicit: false,
        external_ids: {
          isrc: "FR2X41848606",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1Huy9G87D6pbIveFulsH0P",
        },
        href: "https://api.spotify.com/v1/tracks/1Huy9G87D6pbIveFulsH0P",
        id: "1Huy9G87D6pbIveFulsH0P",
        is_local: false,
        is_playable: true,
        name: "Âm Thầm Bên Em",
        popularity: 53,
        preview_url:
          "https://p.scdn.co/mp3-preview/d4cb36cf825c1ae74facf295286dba91e871eb9c?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 11,
        type: "track",
        uri: "spotify:track:1Huy9G87D6pbIveFulsH0P",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/738A5dZVHTynH0sfeL87KV",
          },
          href: "https://api.spotify.com/v1/albums/738A5dZVHTynH0sfeL87KV",
          id: "738A5dZVHTynH0sfeL87KV",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273659e798cad5728dbeabf1603",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02659e798cad5728dbeabf1603",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851659e798cad5728dbeabf1603",
              width: 64,
            },
          ],
          name: "CÓ CHẮC YÊU LÀ ĐÂY",
          release_date: "2020-07-06",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:738A5dZVHTynH0sfeL87KV",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 202105,
        explicit: false,
        external_ids: {
          isrc: "FRX202047969",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2z9iLlNBt1aLZUCFgXby97",
        },
        href: "https://api.spotify.com/v1/tracks/2z9iLlNBt1aLZUCFgXby97",
        id: "2z9iLlNBt1aLZUCFgXby97",
        is_local: false,
        is_playable: true,
        name: "CÓ CHẮC YÊU LÀ ĐÂY",
        popularity: 52,
        preview_url:
          "https://p.scdn.co/mp3-preview/299434ba4059fdb9f4d6b5559807b48a5906fb14?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:2z9iLlNBt1aLZUCFgXby97",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5hxm3ulOLVvjFdZNFO3n4M",
          },
          href: "https://api.spotify.com/v1/albums/5hxm3ulOLVvjFdZNFO3n4M",
          id: "5hxm3ulOLVvjFdZNFO3n4M",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273af31997b23b7e6e65de1816b",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02af31997b23b7e6e65de1816b",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851af31997b23b7e6e65de1816b",
              width: 64,
            },
          ],
          name: "m-tp M-TP",
          release_date: "2017-04-01",
          release_date_precision: "day",
          total_tracks: 18,
          type: "album",
          uri: "spotify:album:5hxm3ulOLVvjFdZNFO3n4M",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 227492,
        explicit: false,
        external_ids: {
          isrc: "FR2X41848607",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0YRtuiIMa3FM3LywGlJIii",
        },
        href: "https://api.spotify.com/v1/tracks/0YRtuiIMa3FM3LywGlJIii",
        id: "0YRtuiIMa3FM3LywGlJIii",
        is_local: false,
        is_playable: true,
        name: "Buông Đôi Tay Nhau Ra",
        popularity: 51,
        preview_url:
          "https://p.scdn.co/mp3-preview/a24186f2c40131a62feb68dfbfafe315051892f1?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 12,
        type: "track",
        uri: "spotify:track:0YRtuiIMa3FM3LywGlJIii",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2bPHnJXjR8q8eC84jCmNt7",
          },
          href: "https://api.spotify.com/v1/albums/2bPHnJXjR8q8eC84jCmNt7",
          id: "2bPHnJXjR8q8eC84jCmNt7",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2730ac09baba508700ed0b5d4e3",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e020ac09baba508700ed0b5d4e3",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048510ac09baba508700ed0b5d4e3",
              width: 64,
            },
          ],
          name: "Hãy Trao Cho Anh",
          release_date: "2019-07-02",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:2bPHnJXjR8q8eC84jCmNt7",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
        ],
        disc_number: 1,
        duration_ms: 245658,
        explicit: false,
        external_ids: {
          isrc: "FR59R1945194",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0f5yQttJS5nNxRAleF4kZO",
        },
        href: "https://api.spotify.com/v1/tracks/0f5yQttJS5nNxRAleF4kZO",
        id: "0f5yQttJS5nNxRAleF4kZO",
        is_local: false,
        is_playable: true,
        name: "Hãy Trao Cho Anh",
        popularity: 50,
        preview_url:
          "https://p.scdn.co/mp3-preview/dde5c34fabad02cc3c1bb964262813dd56bcde0c?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 1,
        type: "track",
        uri: "spotify:track:0f5yQttJS5nNxRAleF4kZO",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5hxm3ulOLVvjFdZNFO3n4M",
          },
          href: "https://api.spotify.com/v1/albums/5hxm3ulOLVvjFdZNFO3n4M",
          id: "5hxm3ulOLVvjFdZNFO3n4M",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273af31997b23b7e6e65de1816b",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02af31997b23b7e6e65de1816b",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851af31997b23b7e6e65de1816b",
              width: 64,
            },
          ],
          name: "m-tp M-TP",
          release_date: "2017-04-01",
          release_date_precision: "day",
          total_tracks: 18,
          type: "album",
          uri: "spotify:album:5hxm3ulOLVvjFdZNFO3n4M",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 260117,
        explicit: false,
        external_ids: {
          isrc: "FR10S1774874",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5HbLlcJogki9rRq2KfkGQP",
        },
        href: "https://api.spotify.com/v1/tracks/5HbLlcJogki9rRq2KfkGQP",
        id: "5HbLlcJogki9rRq2KfkGQP",
        is_local: false,
        is_playable: true,
        name: "Nơi Này Có Anh",
        popularity: 47,
        preview_url:
          "https://p.scdn.co/mp3-preview/6b7a8fc3dfc861ce95fe5d080b6a161a974126c7?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 18,
        type: "track",
        uri: "spotify:track:5HbLlcJogki9rRq2KfkGQP",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7r2UDe86W9yNHVymWu02xG",
          },
          href: "https://api.spotify.com/v1/albums/7r2UDe86W9yNHVymWu02xG",
          id: "7r2UDe86W9yNHVymWu02xG",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273771323ba8f7fe1d93fe094ed",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02771323ba8f7fe1d93fe094ed",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851771323ba8f7fe1d93fe094ed",
              width: 64,
            },
          ],
          name: "SKY DECADE",
          release_date: "2022-10-06",
          release_date_precision: "day",
          total_tracks: 4,
          type: "album",
          uri: "spotify:album:7r2UDe86W9yNHVymWu02xG",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 195697,
        explicit: false,
        external_ids: {
          isrc: "FRX872263797",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6UdpjBhLNMFl3dH46iXlGi",
        },
        href: "https://api.spotify.com/v1/tracks/6UdpjBhLNMFl3dH46iXlGi",
        id: "6UdpjBhLNMFl3dH46iXlGi",
        is_local: false,
        is_playable: true,
        name: "Nắng Ấm Ngang Qua",
        popularity: 50,
        preview_url:
          "https://p.scdn.co/mp3-preview/149e93c2ef79ded2273dee2d6b291930eb36373b?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 3,
        type: "track",
        uri: "spotify:track:6UdpjBhLNMFl3dH46iXlGi",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
              },
              href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
              id: "5dfZ5uSmzR7VQK0udbAVpf",
              name: "Sơn Tùng M-TP",
              type: "artist",
              uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7r2UDe86W9yNHVymWu02xG",
          },
          href: "https://api.spotify.com/v1/albums/7r2UDe86W9yNHVymWu02xG",
          id: "7r2UDe86W9yNHVymWu02xG",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273771323ba8f7fe1d93fe094ed",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02771323ba8f7fe1d93fe094ed",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851771323ba8f7fe1d93fe094ed",
              width: 64,
            },
          ],
          name: "SKY DECADE",
          release_date: "2022-10-06",
          release_date_precision: "day",
          total_tracks: 4,
          type: "album",
          uri: "spotify:album:7r2UDe86W9yNHVymWu02xG",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
            },
            href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
            id: "5dfZ5uSmzR7VQK0udbAVpf",
            name: "Sơn Tùng M-TP",
            type: "artist",
            uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
          },
        ],
        disc_number: 1,
        duration_ms: 196923,
        explicit: false,
        external_ids: {
          isrc: "FRX872263796",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/59u8Iu6cAugFqtA1avGFRT",
        },
        href: "https://api.spotify.com/v1/tracks/59u8Iu6cAugFqtA1avGFRT",
        id: "59u8Iu6cAugFqtA1avGFRT",
        is_local: false,
        is_playable: true,
        name: "Cơn Mưa Xa Dần",
        popularity: 48,
        preview_url:
          "https://p.scdn.co/mp3-preview/35f2a74037cfd876be283e6dda6934c1a3656075?cid=0bbd6e6d69a9484fbc07c8b27c8475b6",
        track_number: 2,
        type: "track",
        uri: "spotify:track:59u8Iu6cAugFqtA1avGFRT",
      },
    ],
  },
};

export const artistsList = {
  data: {
    artists: {
      href: "https://api.spotify.com/v1/search?query=genre%3A%22vietnamese%22&type=artist&market=VN&offset=0&limit=10",
      items: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1LEtM3AleYg1xabW6CRkpi",
          },
          followers: {
            href: null,
            total: 3010763,
          },
          genres: [
            "indie viet",
            "v-pop",
            "vietnamese hip hop",
            "vietnamese trap",
          ],
          href: "https://api.spotify.com/v1/artists/1LEtM3AleYg1xabW6CRkpi",
          id: "1LEtM3AleYg1xabW6CRkpi",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebf95b80329ff91f376acd43d9",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174f95b80329ff91f376acd43d9",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178f95b80329ff91f376acd43d9",
              width: 160,
            },
          ],
          name: "Đen",
          popularity: 61,
          type: "artist",
          uri: "spotify:artist:1LEtM3AleYg1xabW6CRkpi",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3diftVOq7aEIebXKkC34oR",
          },
          followers: {
            href: null,
            total: 267174,
          },
          genres: [
            "indie viet",
            "v-pop",
            "vietnamese hip hop",
            "vietnamese melodic rap",
          ],
          href: "https://api.spotify.com/v1/artists/3diftVOq7aEIebXKkC34oR",
          id: "3diftVOq7aEIebXKkC34oR",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebbde8a1370ee2b335a8f967a5",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174bde8a1370ee2b335a8f967a5",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178bde8a1370ee2b335a8f967a5",
              width: 160,
            },
          ],
          name: "tlinh",
          popularity: 60,
          type: "artist",
          uri: "spotify:artist:3diftVOq7aEIebXKkC34oR",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5dfZ5uSmzR7VQK0udbAVpf",
          },
          followers: {
            href: null,
            total: 4106445,
          },
          genres: ["v-pop", "vietnamese melodic rap"],
          href: "https://api.spotify.com/v1/artists/5dfZ5uSmzR7VQK0udbAVpf",
          id: "5dfZ5uSmzR7VQK0udbAVpf",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb1036554ddc5f791a4f5dcfc3",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab676161000051741036554ddc5f791a4f5dcfc3",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f1781036554ddc5f791a4f5dcfc3",
              width: 160,
            },
          ],
          name: "Sơn Tùng M-TP",
          popularity: 61,
          type: "artist",
          uri: "spotify:artist:5dfZ5uSmzR7VQK0udbAVpf",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/57g2v7gJZepcwsuwssIfZs",
          },
          followers: {
            href: null,
            total: 1511829,
          },
          genres: [
            "indie viet",
            "rock viet",
            "v-pop",
            "vietnamese singer-songwriter",
          ],
          href: "https://api.spotify.com/v1/artists/57g2v7gJZepcwsuwssIfZs",
          id: "57g2v7gJZepcwsuwssIfZs",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab676161000051749896fc9a2e28384f2d705c45",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f1789896fc9a2e28384f2d705c45",
              width: 160,
            },
          ],
          name: "Vũ.",
          popularity: 60,
          type: "artist",
          uri: "spotify:artist:57g2v7gJZepcwsuwssIfZs",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1zSv9qZANOWB4HRE8sxeTL",
          },
          followers: {
            href: null,
            total: 303937,
          },
          genres: [
            "vietnamese hip hop",
            "vietnamese melodic rap",
            "vietnamese trap",
          ],
          href: "https://api.spotify.com/v1/artists/1zSv9qZANOWB4HRE8sxeTL",
          id: "1zSv9qZANOWB4HRE8sxeTL",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebfaa4c2895c21a85b33e60801",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174faa4c2895c21a85b33e60801",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178faa4c2895c21a85b33e60801",
              width: 160,
            },
          ],
          name: "RPT MCK",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:1zSv9qZANOWB4HRE8sxeTL",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5HZtdKfC4xU0wvhEyYDWiY",
          },
          followers: {
            href: null,
            total: 396738,
          },
          genres: ["v-pop", "vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/5HZtdKfC4xU0wvhEyYDWiY",
          id: "5HZtdKfC4xU0wvhEyYDWiY",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb17e2d498df7cbd7c43bd5e6a",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517417e2d498df7cbd7c43bd5e6a",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17817e2d498df7cbd7c43bd5e6a",
              width: 160,
            },
          ],
          name: "HIEUTHUHAI",
          popularity: 59,
          type: "artist",
          uri: "spotify:artist:5HZtdKfC4xU0wvhEyYDWiY",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6zUWZmyi5MLOEynQ5wCI5f",
          },
          followers: {
            href: null,
            total: 839402,
          },
          genres: ["indie viet", "v-pop", "vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6zUWZmyi5MLOEynQ5wCI5f",
          id: "6zUWZmyi5MLOEynQ5wCI5f",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb82055f0d7880dc8c73edc5a0",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517482055f0d7880dc8c73edc5a0",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17882055f0d7880dc8c73edc5a0",
              width: 160,
            },
          ],
          name: "Da LAB",
          popularity: 59,
          type: "artist",
          uri: "spotify:artist:6zUWZmyi5MLOEynQ5wCI5f",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6TITnFVRcl0AcZ4syE7Toe",
          },
          followers: {
            href: null,
            total: 544056,
          },
          genres: ["vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6TITnFVRcl0AcZ4syE7Toe",
          id: "6TITnFVRcl0AcZ4syE7Toe",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb00ece52e50b41c7d6192cc26",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517400ece52e50b41c7d6192cc26",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17800ece52e50b41c7d6192cc26",
              width: 160,
            },
          ],
          name: "Low G",
          popularity: 58,
          type: "artist",
          uri: "spotify:artist:6TITnFVRcl0AcZ4syE7Toe",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2xK6qcvfXuFFbU0NL95aeo",
          },
          followers: {
            href: null,
            total: 401066,
          },
          genres: ["v-pop", "vietnamese singer-songwriter"],
          href: "https://api.spotify.com/v1/artists/2xK6qcvfXuFFbU0NL95aeo",
          id: "2xK6qcvfXuFFbU0NL95aeo",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebb20e2fe7ba45e11a36604b01",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174b20e2fe7ba45e11a36604b01",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178b20e2fe7ba45e11a36604b01",
              width: 160,
            },
          ],
          name: "Thịnh Suy",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:2xK6qcvfXuFFbU0NL95aeo",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3rjcQ5VIWCN4q7UFetzdeO",
          },
          followers: {
            href: null,
            total: 649714,
          },
          genres: ["v-pop", "vietnamese hip hop", "vietnamese melodic rap"],
          href: "https://api.spotify.com/v1/artists/3rjcQ5VIWCN4q7UFetzdeO",
          id: "3rjcQ5VIWCN4q7UFetzdeO",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174de3d3210433dd11c07678420",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178de3d3210433dd11c07678420",
              width: 160,
            },
          ],
          name: "JustaTee",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:3rjcQ5VIWCN4q7UFetzdeO",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6TITnFVRcl0AcZ4syE7Toe",
          },
          followers: {
            href: null,
            total: 544056,
          },
          genres: ["vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6TITnFVRcl0AcZ4syE7Toe",
          id: "6TITnFVRcl0AcZ4syE7Toe",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb00ece52e50b41c7d6192cc26",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517400ece52e50b41c7d6192cc26",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17800ece52e50b41c7d6192cc26",
              width: 160,
            },
          ],
          name: "Low G",
          popularity: 58,
          type: "artist",
          uri: "spotify:artist:6TITnFVRcl0AcZ4syE7Toe",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2xK6qcvfXuFFbU0NL95aeo",
          },
          followers: {
            href: null,
            total: 401066,
          },
          genres: ["v-pop", "vietnamese singer-songwriter"],
          href: "https://api.spotify.com/v1/artists/2xK6qcvfXuFFbU0NL95aeo",
          id: "2xK6qcvfXuFFbU0NL95aeo",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebb20e2fe7ba45e11a36604b01",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174b20e2fe7ba45e11a36604b01",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178b20e2fe7ba45e11a36604b01",
              width: 160,
            },
          ],
          name: "Thịnh Suy",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:2xK6qcvfXuFFbU0NL95aeo",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3rjcQ5VIWCN4q7UFetzdeO",
          },
          followers: {
            href: null,
            total: 649714,
          },
          genres: ["v-pop", "vietnamese hip hop", "vietnamese melodic rap"],
          href: "https://api.spotify.com/v1/artists/3rjcQ5VIWCN4q7UFetzdeO",
          id: "3rjcQ5VIWCN4q7UFetzdeO",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174de3d3210433dd11c07678420",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178de3d3210433dd11c07678420",
              width: 160,
            },
          ],
          name: "JustaTee",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:3rjcQ5VIWCN4q7UFetzdeO",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5HZtdKfC4xU0wvhEyYDWiY",
          },
          followers: {
            href: null,
            total: 396738,
          },
          genres: ["v-pop", "vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/5HZtdKfC4xU0wvhEyYDWiY",
          id: "5HZtdKfC4xU0wvhEyYDWiY",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb17e2d498df7cbd7c43bd5e6a",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517417e2d498df7cbd7c43bd5e6a",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17817e2d498df7cbd7c43bd5e6a",
              width: 160,
            },
          ],
          name: "HIEUTHUHAI",
          popularity: 59,
          type: "artist",
          uri: "spotify:artist:5HZtdKfC4xU0wvhEyYDWiY",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6zUWZmyi5MLOEynQ5wCI5f",
          },
          followers: {
            href: null,
            total: 839402,
          },
          genres: ["indie viet", "v-pop", "vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6zUWZmyi5MLOEynQ5wCI5f",
          id: "6zUWZmyi5MLOEynQ5wCI5f",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb82055f0d7880dc8c73edc5a0",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517482055f0d7880dc8c73edc5a0",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17882055f0d7880dc8c73edc5a0",
              width: 160,
            },
          ],
          name: "Da LAB",
          popularity: 59,
          type: "artist",
          uri: "spotify:artist:6zUWZmyi5MLOEynQ5wCI5f",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6TITnFVRcl0AcZ4syE7Toe",
          },
          followers: {
            href: null,
            total: 544056,
          },
          genres: ["vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6TITnFVRcl0AcZ4syE7Toe",
          id: "6TITnFVRcl0AcZ4syE7Toe",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb00ece52e50b41c7d6192cc26",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517400ece52e50b41c7d6192cc26",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17800ece52e50b41c7d6192cc26",
              width: 160,
            },
          ],
          name: "Low G",
          popularity: 58,
          type: "artist",
          uri: "spotify:artist:6TITnFVRcl0AcZ4syE7Toe",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2xK6qcvfXuFFbU0NL95aeo",
          },
          followers: {
            href: null,
            total: 401066,
          },
          genres: ["v-pop", "vietnamese singer-songwriter"],
          href: "https://api.spotify.com/v1/artists/2xK6qcvfXuFFbU0NL95aeo",
          id: "2xK6qcvfXuFFbU0NL95aeo",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebb20e2fe7ba45e11a36604b01",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174b20e2fe7ba45e11a36604b01",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178b20e2fe7ba45e11a36604b01",
              width: 160,
            },
          ],
          name: "Thịnh Suy",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:2xK6qcvfXuFFbU0NL95aeo",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3rjcQ5VIWCN4q7UFetzdeO",
          },
          followers: {
            href: null,
            total: 649714,
          },
          genres: ["v-pop", "vietnamese hip hop", "vietnamese melodic rap"],
          href: "https://api.spotify.com/v1/artists/3rjcQ5VIWCN4q7UFetzdeO",
          id: "3rjcQ5VIWCN4q7UFetzdeO",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174de3d3210433dd11c07678420",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178de3d3210433dd11c07678420",
              width: 160,
            },
          ],
          name: "JustaTee",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:3rjcQ5VIWCN4q7UFetzdeO",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6TITnFVRcl0AcZ4syE7Toe",
          },
          followers: {
            href: null,
            total: 544056,
          },
          genres: ["vietnamese hip hop"],
          href: "https://api.spotify.com/v1/artists/6TITnFVRcl0AcZ4syE7Toe",
          id: "6TITnFVRcl0AcZ4syE7Toe",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5eb00ece52e50b41c7d6192cc26",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab6761610000517400ece52e50b41c7d6192cc26",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f17800ece52e50b41c7d6192cc26",
              width: 160,
            },
          ],
          name: "Low G",
          popularity: 58,
          type: "artist",
          uri: "spotify:artist:6TITnFVRcl0AcZ4syE7Toe",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2xK6qcvfXuFFbU0NL95aeo",
          },
          followers: {
            href: null,
            total: 401066,
          },
          genres: ["v-pop", "vietnamese singer-songwriter"],
          href: "https://api.spotify.com/v1/artists/2xK6qcvfXuFFbU0NL95aeo",
          id: "2xK6qcvfXuFFbU0NL95aeo",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebb20e2fe7ba45e11a36604b01",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174b20e2fe7ba45e11a36604b01",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178b20e2fe7ba45e11a36604b01",
              width: 160,
            },
          ],
          name: "Thịnh Suy",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:2xK6qcvfXuFFbU0NL95aeo",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3rjcQ5VIWCN4q7UFetzdeO",
          },
          followers: {
            href: null,
            total: 649714,
          },
          genres: ["v-pop", "vietnamese hip hop", "vietnamese melodic rap"],
          href: "https://api.spotify.com/v1/artists/3rjcQ5VIWCN4q7UFetzdeO",
          id: "3rjcQ5VIWCN4q7UFetzdeO",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420",
              width: 640,
            },
            {
              height: 320,
              url: "https://i.scdn.co/image/ab67616100005174de3d3210433dd11c07678420",
              width: 320,
            },
            {
              height: 160,
              url: "https://i.scdn.co/image/ab6761610000f178de3d3210433dd11c07678420",
              width: 160,
            },
          ],
          name: "JustaTee",
          popularity: 57,
          type: "artist",
          uri: "spotify:artist:3rjcQ5VIWCN4q7UFetzdeO",
        },
      ],
      limit: 10,
      next: "https://api.spotify.com/v1/search?query=genre%3A%22vietnamese%22&type=artist&market=VN&offset=10&limit=10",
      offset: 0,
      previous: null,
      total: 671,
    },
  },
};
