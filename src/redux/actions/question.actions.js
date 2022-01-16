import axios from "axios";

const GET_QUESTION = "GET_QUESTION";
const getQuestionSuccess = (payload) => {
  return {
    type: GET_QUESTION,
    payload,
  };
};

export const getQuestion = () => async (dispatch) => {
  const Token = localStorage.getItem("token");
  let result = await axios({
    method: "get",
    url: "https://ms-wellbeing-center-backend.herokuapp.com/questions",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });

  if (result.data.data) {
    dispatch(getQuestionSuccess(result.data.data));
  }
};
