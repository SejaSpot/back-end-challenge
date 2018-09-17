const axios = require("axios");

test("create post", async () => {
  const { data } = await axios.post("http://localhost:3000/posts", {
    _id: "123",
    name: "test",
    content: "test",
    date: new Date()
  });
  expect(data).toBeDefined();
});

test("return list of posts", async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  expect(data).toBeDefined();
});

test("return post by id", async () => {
  const { data } = await axios.get("http://localhost:3000/posts", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});

test("delete post", async () => {
  const {data} = await axios.delete("http://localhost:3000/posts", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});