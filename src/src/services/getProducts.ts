import { Baseurl } from "@/services/baseurl";

export const getProductsPagined = async (start: number, limit: number) => {
  try {
    const response = await fetch(
      `${Baseurl}/movels?_start=${start}&_limit=${limit}`,
      {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${Baseurl}/movels`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
