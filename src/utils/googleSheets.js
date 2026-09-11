// Utility to fetch products live from Google Sheets
export const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1IT18UQGYG86mo1ypQXxN3ODycKoJ5PV7WZ0x00i6i5Y/export?format=csv";

export function parseCSV(csvText) {
  const rows = [];
  let currentRow = [];
  let currentVal = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      currentRow.push(currentVal.trim());
      currentVal = "";
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") i++;
      currentRow.push(currentVal.trim());
      if (currentRow.some((c) => c !== "")) rows.push(currentRow);
      currentRow = [];
      currentVal = "";
    } else {
      currentVal += char;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    if (currentRow.some((c) => c !== "")) rows.push(currentRow);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.trim().toLowerCase());

  return rows
    .slice(1)
    .map((row) => {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = row[idx] !== undefined ? row[idx] : "";
      });

      const rawNum = Number(String(obj.rawprice || obj.price || "0").replace(/[^0-9]/g, "")) || 0;

      return {
        id: obj.id || `item-${Math.random()}`,
        category: (obj.category || "bike").toLowerCase().trim(),
        name: obj.name || "",
        specs: obj.specs || "",
        price: obj.price || (rawNum ? `₹${rawNum.toLocaleString("en-IN")}` : "Price on Request"),
        rawPrice: rawNum,
        image: obj.image || "/images/bike_card.jpg",
        tag: obj.tag || "Available",
        inStock: String(obj.instock).toLowerCase() !== "false",
      };
    })
    .filter((p) => p.name && p.name.trim().length > 0);
}

export async function fetchLiveProducts(fallbackData = []) {
  try {
    // Add cache busting timestamp so phone edits appear immediately on page refresh
    const url = `${GOOGLE_SHEET_CSV_URL}&t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch Google Sheet");
    const csv = await res.text();
    const parsed = parseCSV(csv);
    if (parsed && parsed.length > 0) {
      return parsed;
    }
    return fallbackData;
  } catch (err) {
    console.warn("Could not load Google Sheet, using local fallback data:", err);
    return fallbackData;
  }
}
