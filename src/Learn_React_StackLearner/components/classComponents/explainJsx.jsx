import React from "react";
class ExplainJsx extends React.Component {
  render() {
    return React.createElement("div", { className: "class" }, [React.createElement("p", null, "why jsx?"), React.createElement("h3", null, "jsx is javascript extention")]);

    // return (
    //     <>
    //         <p className="">Why jsx ?</p>
    //         <p>Let's explain about jxs</p>
    //     </>
    // );
  }
}
export default ExplainJsx;

// react.createElement('element',{attribute},child,text,)
const element = {
  type: "",
  props: {
    title: "title",
    className: "class",
  },
  children: ["p", "h1", "img" | "text"] | null,
};
