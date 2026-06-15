"use server";

import { serverMutaiton } from "../server";

export const addEvent = async (data) => {
  const resData = await serverMutaiton("/api/events", "POST", data);
  return resData;
};

export const updateEvent = async (data, id) => {
  const resData = await serverMutaiton(`/api/events/${id}`, "PATCH", data);
  return resData;
};
