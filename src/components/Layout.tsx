import React, { useEffect } from "react";
import { LayoutTypes } from "src/types/layout";
import Nav from "./Header";
import { useRouter } from "next/router";

function Layout(props: LayoutTypes) {
  const router = useRouter();

  useEffect(() => {
    if (!props.token) {
      router.push("/");
      return;
    }
  });
  return (
    <React.Fragment>
      <Nav/>
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
