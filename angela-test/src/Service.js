export const getData = async () => {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
