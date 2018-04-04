/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';
import getPageContext from './src/utils/getPageContext';

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        pageContext,
      })}
    </JssProvider>
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: pageContext.sheetsRegistry.toString(),
      }}
    />,
  ]);
};
