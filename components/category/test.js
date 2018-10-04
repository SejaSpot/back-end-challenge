const axios = require("axios");

test("create category", async () => {
  const { data } = await axios.post("http://localhost:3000/categories", {
    _id: "123",
    name: "test"
  });
  expect(data).toBeDefined();
});

test("return list of categories", async () => {
  const { data } = await axios.get("http://localhost:3000/categories");
  expect(data).toBeDefined();
});

test("return category by id", async () => {
  const { data } = await axios.get("http://localhost:3000/categories", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});

test("delete category", async () => {
  const {data} = await axios.delete("http://localhost:3000/categories", {
    params: {
      _id: "123"
    }
  });
  expect(data).toBeDefined();
});