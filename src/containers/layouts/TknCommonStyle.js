import styled from "styled-components"
import { WithDirection } from "travelkosh-shared"

const TknCommonStyle = styled.div`
  position: relative;

  .content {
    position: relative;
    padding-top: 90px;
    margin: 0 20px;

    .tkFirstPaper {
      padding-bottom: 32px;
      position: relative;
    }

    .tkJoinedPaper {
      padding-bottom: 32px;
      position: relative;

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 10%;
        bottom: -8px;
        width: 8px;
        height: 16px;
        display: inline-block;
        background: #fff;
      }

      &:before {
        left: 90%;
      }
    }

    .tkPaper {
      margin-top: 8px;
      padding: 16px 32px;
    }

    .imageContainer {
      width: 225px;
      height: 250px;
      margin-top: -145px;
    }

    .header {
      font-size: 24px;
      text-align: center;
      color: #15959a;
    }

    .subHeader {
      font-size: 16px;
      text-align: center;
      color: #ccc;
      display: inherit;
    }

    .fieldLabel {
      font-size: 18px;
      color: #7d7d7d;
    }

    .tknFormButtonContainer {
      background-color: #f5f5f5;
      border-top: 1px solid #ccc;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 8px;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
    }

    .topBar {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      background-color: #f5f5f5;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid #ccc;

      .searchContainer {
        display: inline-flex;
        min-width: 300px;
        padding-left: 16px;

        .searchInput {
          min-width: 300px;
        }

        .searchIcon {
          margin: 8px;
          color: #007696;
        }
      }
    }
  }
`

export default WithDirection(TknCommonStyle)
