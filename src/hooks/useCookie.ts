import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface UseCookiesOptions {
  key: string;
  defaultValue?: string | null | undefined;
}

function parseJson(string: string) {
  try {
    const stringToObject = JSON.parse(string);
    return stringToObject;
  } catch (e) {
    return string;
  }
}

function getItem(key: string) {
  const cookies = document.cookie.split("; ");

  for (const currentCookie of cookies) {
    const [storedKey, storedValue] = currentCookie.split("=");
    if (key === storedKey) {
      return parseJson(decodeURIComponent(storedValue));
    }
  }

  return "";
}

function setItem(key: string, value: string) {
  if (value && typeof value === "object") {
    value = JSON.stringify(value);
  }

  if (!value) {
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  } else {
    document.cookie = `${key}=${value || ""}; path=/`;
  }
}

export const useCookie = ({
  key,
  defaultValue = "",
}: UseCookiesOptions): [string, Dispatch<SetStateAction<string | null>>] => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(() => getCookie());

  useEffect(() => {
    setItem(key, cookie);
  }, [cookie, key]);

  return [cookie, setCookie];
};
