"use server";

import { serverMutaiton } from "../server";

export const addOrinization = async (data) => {
  const resData = await serverMutaiton("/api/organizations", "POST", data);
  return resData;
};

export const updateOrinization = async (data, id) => {
  const resData = await serverMutaiton(
    `/api/organizations/${id}`,
    "PATCH",
    data,
  );
  return resData;
};
