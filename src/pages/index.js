import React from "react";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div>
        <h1>ButterCMS and Gatsby Incremental Builds</h1>
        <div>
          <p>
            This website is dedicated to showcase an experiment using{" "}
            <a href="https://buttercms.com">ButterCMS</a> and{" "}
            <a href="https://gatsby.com">Gatsby</a>.
          </p>
          <p>
            Since v3, Gatsby supports incremental builds by default. It means
            that if your website is linked to ButterCMS and some content change,
            a full rebuild is no longer needed.
          </p>
          <p>
            Full rebuilds, as the name suggests, rebuild whe whole website even
            if no change has been made to a particular section. Therefore, build
            times can get real long as your app grows in content.
          </p>
          <p>
            In this experiment, the Home is not linked at all to Butter, but the
            blog is. If Post A changes, neither the Home nor Post B should
            change. That's the magic of incremental builds!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
