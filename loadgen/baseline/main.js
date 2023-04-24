import { sleep, check } from "k6";
import http from "k6/http";
import { SharedArray } from "k6/data";
import { addRandAgent } from "./helpers.js";
import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

export const options = {
  stages: [{ target: 10, duration: `${__ENV.DURATION}` }],
};

const data = new SharedArray("data", function () {
  const f = JSON.parse(open("./data.json"));
  return f;
});

const cookieValue = `%7B%22diA%22%3A%22${randomString(8)}`;

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function checkRes(res) {
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}

export default function () {
  const base = `${__ENV.TARGET_URL}`;
  const jar = http.cookieJar();
  jar.set(base, "_imp_apg_r_", cookieValue);
  const randomPath = data[Math.floor(Math.random() * data.length)];
  const url = base + randomPath.path;
  let res = http.get(url, addRandAgent());
  checkRes(res);
  if (randomPath.post) {
    const value =
      randomPath.values[Math.floor(Math.random() * randomPath.values.length)];
    let data = JSON.stringify({
      value: value.name,
    });
    let res = http.post(
      url,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
      addRandAgent()
    );
    checkRes(res);
  }
  sleep(getRandomNum(1, 5));
}
