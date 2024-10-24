/**
 * Converts CSV data into an array of objects where each object
 * corresponds to a row in the CSV and each key in the object
 * corresponds to a column header.
 * @param csv - A string representing the CSV data.
 * @returns An array of objects with key-value pairs based on CSV data.
 */
function csvJSON(csv: string): Record<string, string>[] {
  const lines = csv.split("\n");
  const result: Record<string, string>[] = [];
  const headers = lines[0].split(",");

  lines.splice(1).forEach((line) => {
    const obj: Record<string, string> = {};
    const currentline = line.split(",");

    headers.forEach((header, i) => {
      obj[header] = currentline[i];
    });

    result.push(obj);
  });

  return result;
}

export default csvJSON;
