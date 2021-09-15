export const displayMushrooms = (mushrooms) => ({
  type: 'DISPLAY_MUSHROOMS',
  payload: mushrooms,
});

export const fetchMushroomList = () => async (dispatch) => {
  const url = 'http://localhost:3000/mushrooms';
  const mushrooms = await fetch(url).then((res) => res.json());
  dispatch(displayMushrooms(mushrooms.data));
};
