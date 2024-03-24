export const getIdFromUrl = (urls: string[] | []) => {
  return urls.map((url) => url.split("/")[6])
}