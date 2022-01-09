export function convertStringToHtml(string: string) {
  const parser = new DOMParser();

  const doc = parser.parseFromString(string, "text/html");

  return doc.body.firstChild;
}
