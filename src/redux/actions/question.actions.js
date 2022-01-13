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
  //   console.log(Token);
  let result = await axios({
    method: "get",
    url: "http://localhost:3005/questions",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });

  console.log(result);

  if (result.data.data) {
    dispatch(getQuestionSuccess(result.data.data));
  }
};
