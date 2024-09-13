export const replaceMultiple = (
  str: string,
  translator: Record<string, string>
) =>
  Object.entries(translator).reduce(
    (acc, [from, to]) => acc.replace(from, to),
    str
  );

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
const getInt = (num: string) => {
  try {
    return parseInt(num);
  } catch (error) {
    return null;
  }
};

export const sentencize = (
  str: string = "",
  {
    splitter,
    joiner,
    translator = {},
  }: {
    splitter?: string;
    joiner?: string;
    translator?: Record<string, string>;
  } = {}
): string =>
  replaceMultiple(str, translator)
    .split(splitter || "_")
    .map((word) => {
      const capitalised = word === "id" ? "ID" : capitalize(word);
      return capitalised.includes(".")
        ? sentencize(capitalised, { splitter: ".", joiner: "." })
        : capitalised.includes('"')
        ? sentencize(capitalised, { splitter: '"', joiner: '"' })
        : capitalised;
    })
    .join(joiner ?? " ");
