import React, { Component } from "react";
import DefaultWrapper from "react-styleguidist/lib/client/rsg-components/Wrapper/Wrapper";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import appComponents from "../appComponents";

function Wrapper() {
  return (
    <ComponentsProvider value={appComponents}>
      <DefaultWrapper {...this.props} />
    </ComponentsProvider>
  );
}

export default Wrapper;
