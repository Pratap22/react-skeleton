import { createGlobalStyle } from "styled-components"

const TknGlobalStyle = createGlobalStyle`

.firstCharIcon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
  border-radius: 50%;
  margin: 0px 8px;  
}

.tknSubmitBtn {
  border-radius: 23px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(106deg, #1abec5 -6%, #007696 112%);
  margin: 8px;
  min-width: 150px;
}

.partnerTable {
  .MuiTableHead-root {
    background-color: rgb(245, 245, 245);
  }
}
`
export default TknGlobalStyle
