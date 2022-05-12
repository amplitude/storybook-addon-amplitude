const getCategory = (path: string) => {
  try {
    const regex = /(docs\/|story\/)(.*)(?=--)/;
    const subRegex = regex.exec(path);

    if (subRegex !== null) {
      const splitPath = subRegex[2].split("-");
      const pageIndex = splitPath.length - 1;
      splitPath.splice(pageIndex, 1);
      return splitPath.join("-");
    }
  } catch (error) {
    buildError("group", error);
  }
};

const getPage = (path: string) => {
  try {
    const regex = /(\/.+?)(?=--)/;
    const subRegex = regex.exec(path);

    if (subRegex !== null) {
      const splitPath = subRegex[0].split("-");
      const pageIndex = splitPath.length - 1;
      return splitPath[pageIndex];
    }
  } catch (error) {
    buildError("page", error);
  }
};

const getStory = (path: string) => {
  try {
    const splitPath = path.split("--");
    const pageIndex = splitPath.length - 1;
    return splitPath[pageIndex] === "page" ? null : splitPath[pageIndex];
  } catch (error: unknown) {
    buildError("story", error);
  }
};

const buildError = (
  attr: string,
  error: unknown
): { category: string; page: string; story: string } => {
  console.error(`[storybook-amplitude] Error on get ${attr}`, error);
  return null;
};

export const parsePath = (path: string) => {
  const category = getCategory(path);
  const page = getPage(path);
  const story = getStory(path);

  return { category, page, story };
};
