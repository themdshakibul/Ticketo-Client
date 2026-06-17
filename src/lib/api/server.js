import { baseUrl } from "./baseurl";

export const serverMutaiton = async (path, method, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteMutaiton = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "DELETE",
  });
  return res.json();
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};
