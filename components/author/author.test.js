const axios = require("axios");

test("create author", async () => {
  const { data } = await axios.post("http://localhost:3000/authors", {
    _id: "123",
    name: "test",
    description: "test"
  });
  expect(data).toBeDefined();
});

test("return list of authors", async () => {
  const { data } = await axios.get("http://localhost:3000/authors");
  expect(data).toBeDefined();
});

test("return author by id", async () => {
  const { data } = await axios.get("http://localhost:3000/authors", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});

test("delete author", async () => {
  const {data} = await axios.delete("http://localhost:3000/authors", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});