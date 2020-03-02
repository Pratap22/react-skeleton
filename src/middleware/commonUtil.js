import React from "react"
import { ViewTypes } from "./sharedConstants"
import Hashids from "hashids"

export default class CommonUtil {
  static formUrl(baseUrl, params) {
    var newUrl = baseUrl.replace(/\/$/, "")
    var isUrlValid = true
    if (params && params.length > 0) {
      isUrlValid = false
      params.forEach(param => {
        if (param && param.trim().length > 0) {
          isUrlValid = true
          newUrl = newUrl + "/" + param
        }
      })
    }
    return isUrlValid ? newUrl : null
  }

  static defaultDropdownMapper(data) {
    if (data && data.constructor === Array) {
      return data.map(d => {
        return { key: d.key, value: d.value }
      })
    }
    return []
  }

  static metaLabelDropdownMapper(data) {
    if (data && data.constructor === Array) {
      let mappedData = data.map(d => {
        return { key: d.key, value: `${d.value}(${d.count})` }
      })
      mappedData.unshift({ key: "ALL", value: "All" })
      return mappedData
    }
    return []
  }

  static isEmpty(value) {
    return value === undefined || value === null || value.trim() === ""
  }

  static isArrayValuePresent(arr) {
    let isPresent = false
    if (arr && arr.constructor === Array) {
      arr.forEach(value => {
        if (!this.isEmpty(value)) {
          isPresent = true
          return
        }
      })
    }
    return isPresent
  }

  static isNotEmpty(items) {
    return items && items.constructor === Array && items.length > 0
  }

  static stripTrailingSlash(url) {
    if (url.substr(-1) === "/") {
      return url.substr(0, url.length - 1)
    }
    return url
  }

  static getView() {
    let width = this.isBrowser() ? window.innerWidth : 0
    let newView = ViewTypes.MobileView
    if (width > 1220) {
      newView = ViewTypes.DesktopView
    } else if (width > 767) {
      newView = ViewTypes.TabView
    }
    return newView
  }

  static createFilter = (filters, isAnd = false) => {
    const matches = (item, { property, value }) => {
      return (
        String(item[property])
          .toLowerCase()
          .indexOf(value.toLowerCase()) > -1
      )
    }
    return isAnd
      ? item => filters.every(filter => matches(item, filter))
      : item => filters.some(filter => matches(item, filter))
  }

  static handleCommonAction = (draft, action, types) => {
    Object.values(types).forEach(type => {
      if (type === action.type) {
        draft.isLoading = true
        return draft
      } else if (`${type}_FAIL` === action.type) {
        draft.isLoading = false
        return draft
      }
    })
    return null
  }

  static getRequestData = action => {
    if (
      action &&
      action.meta &&
      action.meta.previousAction &&
      action.meta.previousAction.payload
    ) {
      return action.meta.previousAction.payload.request || {}
    }
    return {}
  }

  static getPriceAddon = (isINR = true, isShort = true, size = "18px") => {
    const priceSymbol = CommonUtil.getPriceSymbol(isINR, size)
    if (isShort) {
      return priceSymbol
    } else {
      return isINR ? (
        <span>Indian Rupee ({priceSymbol})</span>
      ) : (
        <span>US Dollar ({priceSymbol})</span>
      )
    }
  }

  static getPriceSymbol = (isINR = true, size = "18px") => {
    return (
      <span
        style={{
          fontFamily: "monospace",
          fontSize: size,
          fontWeight: 500,
        }}
      >
        {isINR ? "₹" : "$"}
      </span>
    )
  }

  static isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  static getUniqueId = () => {
    const hashids = new Hashids("Bookers Web App", 6)
    return hashids.encode(Date.now()).toUpperCase()
  }

  /* Is required validation function for formik field */
  static isRequired = message => value => (!!value ? undefined : message)

  static validate = (validationSchema, values) => {
    if (validationSchema) {
      try {
        validationSchema.validateSync(values, { abortEarly: false })
        return {}
      } catch (error) {
        return CommonUtil.getErrorsFromValidationError(error)
      }
    }
  }

  static getErrorsFromValidationError = validationError => {
    if (validationError.inner) {
      return validationError.inner.reduce((errors, error) => {
        return {
          ...errors,
          [error.path]: error.errors[0],
        }
      }, {})
    }
    return {}
  }

  static getStringValues = input => {
    if (typeof input === "number") {
      return String(input)
    } else if (Array.isArray(input)) {
      return input.map(item => String(item))
    }
    return input
  }

  static isBrowser = () => typeof window !== "undefined"

  static measureDomNode = (node, enhanceMeasurableNode = e => e) => {
    const container = document.createElement("div")
    container.style = {
      display: "inline-block",
      position: "absolute",
      visibility: "hidden",
      zIndex: -1,
    }

    const clonedNode = node.cloneNode(true)
    const content = enhanceMeasurableNode(clonedNode)

    container.appendChild(content)

    document.body.appendChild(container)

    const height = container.clientHeight
    const width = container.clientWidth

    container.parentNode.removeChild(container)
    return { height, width }
  }
}
