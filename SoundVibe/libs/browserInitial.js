import { browserApi } from "../app/api";

export const fetchLocalSongs = async () => {
  const songsInLocal = await browserApi.getSongInAppLocal(1, 20);
  return songsInLocal;
};

export const featuredData = async () => {
  let theLastedResult = [];
  const songsInLocal = await fetchLocalSongs();

  const data = await browserApi.getBrowserData();
  const browserData = data?.data?.data;

  // dispatch featured data
  const featuredData = browserData.items.reverse().filter((item) => {
    if (
      item.items &&
      item.items.length > 0 &&
      item.sectionType !== "banner" &&
      item.sectionType !== "livestream" &&
      item.sectionType !== "new-release" &&
      item.sectionType !== "newReleaseChart" &&
      item.title
    ) {
      return item.items;
    }
  });
  browserData.items.filter((item) => {
    if (item.sectionType === "new-release") {
      const newRelease = {
        sectionId: "new-release-encode-id",
        encodeId: "new-release-encode-id",
        sectionType: item.sectionType,
        title: item.title,
        items: item.items.all,
        type: "song",
      };
      // featuredData.push(newRelease);

      // featuredData.reverse();

      // save NewReleaseSongs
      theLastedResult.push({ type: "playlist", data: newRelease });
    }
    if (item.sectionType === "newReleaseChart") {
      const newReleaseChart = {
        sectionId: "newReleaseChart-encode-id",
        encodeId: "newReleaseChart-encode-id",
        sectionType: item.sectionType,
        title: item.title,
        items: item.items,
        type: "song",
      };
      // save NewReleaseSongs
      theLastedResult.push({ type: "playlist", data: newReleaseChart });
    }
  });
  theLastedResult.push({ type: "playlistList", data: featuredData });

  if (songsInLocal.data.length > 0) {
    const fakeFeatured = {
      sectionId: "local-songs",
      sectionType: "local-songs",
      items: songsInLocal.data,
      title: "Nhạc linh tinh",
    };
    theLastedResult.push({ type: "playlist", data: fakeFeatured });
  }

  return theLastedResult;
};

export const getBannersData = async () => {
  const data = await browserApi.getBrowserData();
  const browserData = data?.data?.data;
  // dispatch banner data
  const banners = browserData.items.find(
    (item) => item.sectionType === "banner"
  );

  return banners;
};
