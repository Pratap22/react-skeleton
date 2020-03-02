// import { notification } from "antd";
import axios from "axios"
import { getActionTypes } from "./axios-middleware"
import * as Constants from "./sharedConstants"

export const apiClient = axios.create({
  baseURL: "",
  responseType: "json",
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
})

export const CancelToken = axios.CancelToken

export const setTokenType = client => {
  client.defaults.headers.common[Constants.HEADER_TOKEN_TYPE] =
    Constants.TOKEN_TYPE
  return client
}

export const handleApiError = ({ action, next, error }, options) => {
  let messageTitle, messageBody, errorDetail
  if (!error.response) {
    //no error response object
    messageTitle = "Error communicating"
    messageBody = "Could not establish a server connection please try later."
    if (process.env.NODE_ENV !== "production") {
      console.log("HTTP Failure in Axios", error)
    }
  } else {
    switch (error.response.status) {
      case 401:
        //unauthorized access redirect to login page
        messageTitle = "Unauthorized"
        messageBody = "The credentials could not be verified please login"
        break
      case 502:
        messageTitle = "Maintenance Mode"
        messageBody = "Undergoing maintenance, please retry after some time"
        break
      case 400:
        errorDetail = error.response.data
        break
      case 500:
        messageTitle = "Server Error"
        messageBody =
          "We're sorry! The server has encountered an internal error, please retry later"
        break
      case 304:
        //resource not modified do nothing
        break
      default:
        messageTitle = "Unknown Error"
        messageBody = "Error processing your request"
        break
    }
  }
  if (messageTitle) {
    // notification.open({
    //   message: messageTitle,
    //   description: messageBody,
    //   className: "tkErrorNotification"
    // });

    console.log("Error", messageBody)
  }

  const nextAction = {
    type: getActionTypes(action, options)[2],
    error: errorDetail,
    meta: {
      previousAction: action,
    },
  }

  next(nextAction)
  return errorDetail
}
