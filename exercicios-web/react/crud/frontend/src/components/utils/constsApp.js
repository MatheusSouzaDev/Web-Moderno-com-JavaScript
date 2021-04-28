const userCrud = Object.freeze({
  baseUrl: "http://localhost:3001/users",
  initialState: {
    user: { name: "", email: "" },
    list: [],
  },
});

export { userCrud }