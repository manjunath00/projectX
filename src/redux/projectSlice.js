import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: [
    {
      id: "12",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
    {
      id: "13",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
    {
      id: "14",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
  ],
  reducers: {
    addNewProject: (state, action) => {
      const { heading, description } = action.payload;

      const project = {
        id: String(Date.now()),
        heading,
        description,
        image: "https://source.unsplash.com/random/800x600",
      };

      state.push(project);
    },

    deleteProject: (state, action) => {
      const { id } = action.payload;
      const newState = state.filter(item => item.id !== id);

      return newState;
    },
    editProject: (state, action) => {
      const { id, heading, description } = action.payload;
      const newState = state.filter(item => item.id !== id);
      const project = {
        id,
        heading,
        description,
        image: "https://source.unsplash.com/random/800x600",
      };
      newState.push(project);

      return newState;
    }
  },
});

export const { addNewProject, deleteProject, editProject } = projectSlice.actions;

export default projectSlice.reducer;