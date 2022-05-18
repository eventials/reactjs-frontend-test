import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface UseCookiesOptions {
  key: string;
  defaultValue?: string | null | undefined;
}

const parseJson = (string: string) => {
  try {
    const stringToObject = JSON.parse(string);
    return stringToObject;
  } catch (e) {
    return string;
  }
};

const getItem = (key: string) => {
  const cookies = document.cookie.split("; ");

  for (const currentCookie of cookies) {
    const [storedKey, storedValue] = currentCookie.split("=");
    if (key === storedKey) {
      return parseJson(decodeURIComponent(storedValue));
    }
  }

  return "";
};

const setItem = (key: string, value: string) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  document.cookie = `${key}=${value}; path=/`;
};

export const useCookie = ({
  key,
  defaultValue = "",
}: UseCookiesOptions): [string, Dispatch<SetStateAction<string>>] => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(() => getCookie());
  
  useEffect(() => {
    setItem(key, cookie);
  }, [cookie, key]);

  return [cookie, setCookie];
};
