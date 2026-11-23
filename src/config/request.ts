// Project request form choices, shared by the form (src/components/RequestForm.tsx) and the Cloud Function
// (functions/src/index.ts keeps its own copy of the allowed values; change both together).
export const requestOptions = {
  service: ["AI agent", "Data and cloud", "Analytics or forecasting", "Website", "Not sure yet"],
  deadline: ["As soon as possible", "Within 1 month", "1 to 3 months", "Flexible"],
  budget: ["Under $1,000", "$1,000 to $3,000", "$3,000 to $7,000", "$7,000 to $15,000", "$15,000 or more", "Not sure yet"],
} as const;

export const REQUEST_ENDPOINT = process.env.NEXT_PUBLIC_REQUEST_ENDPOINT || "/api/request";
export const MAX_DESCRIPTION = 4000;
