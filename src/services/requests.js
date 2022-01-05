const parseToJson = async (res) => {
  const data = await res.json();
  return data;
};

const get = async (url) => {
  const res = await fetch(url);
  return await parseToJson(res);
};

const post = async (url, body) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  return await parseToJson(res);
};

const remove = async (url) => {
  const res = await fetch(url, {method: 'DELETE'});
  return await parseToJson(res);
};

const put = async (url, body) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  return await parseToJson(res);
};

const requests = {
  get,
  post,
  put,
  remove,
};

export default requests;
