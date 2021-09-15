export const displayMushrooms = (mushrooms) => ({
  type: 'DISPLAY_MUSHROOMS',
  payload: mushrooms,
});

export const setLoading = (val) => ({
  type: 'SET_LOADING',
  payload: val,
});

export const showError = (e) => ({
  type: 'SHOW_ERROR',
  payload: `Something went wrong loading mushroom list component${e}`,
});

export const fetchMushroomList = () => async (dispatch) => {
  try {
    const url = 'http://localhost:3000/mushrooms';
    const mushrooms = await fetch(url).then((res) => res.json());
    dispatch(setLoading(true));
    dispatch(displayMushrooms(mushrooms.data));
  } catch (e) {
    dispatch(showError(e));
  }
};
