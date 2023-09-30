import React, { useEffect } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import { Button } from "@material-ui/core";

const LockedPage = ({changePage, status, testFunc}) => {

  // useEffect(() => {
  //   alanBtn({
  //     key: "539afbe48fb481ebef8b6ab26c29cd7c2e956eca572e1d8b807a3e2338fdd0dc/stage",
  //     onCommand: ({ command }) => {
  //       if (command === "switchToMainPage") {
  //         alert('code activated')
  //         changePage()
  //       }
  //     },
  //   });
  // }, []);

  return (
    <>
      <div>LockedPage</div>
      <div>{status}</div>
      <Button variant="contained" onClick={() => changePage()}>Change Page</Button>
    </>
  );
};

export default LockedPage;
