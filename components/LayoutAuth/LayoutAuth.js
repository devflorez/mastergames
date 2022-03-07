import React from "react";
import Image from "next/image";
import { Grid } from "semantic-ui-react";
export default function LayoutAuth({ children }) {
  return (
    <div className="layoutAuth">
      <main className="layoutAuth--children">
        <Grid columns={2} doubling>
          <Grid.Column>{children}</Grid.Column>
          <Grid.Column>
            <Image
              src="/assets/background.jpg"
              width={1920 / 3}
              height={2879 / 3}
              alt="background"
            />
          </Grid.Column>
        </Grid>
      </main>
    </div>
  );
}
