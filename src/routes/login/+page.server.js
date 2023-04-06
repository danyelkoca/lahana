/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    console.log(event);
    return { success: true, info: "yolo" };
  },
};
