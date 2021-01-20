import React from "react";
import { Collapse, ButtonFilled, View, Text } from "../src";
import { Flipflop } from "libreact/lib/Flipflop";

export default {
  title: "Original Go1d/Collapse",
  component: Collapse,
  subcomponents: { ButtonFilled, View, Text },
};

export const WithHeaderString = () => (
  <div style={{ width: "50%" }}>
    <Flipflop>
      {({ on, flip, flop }) => (
        <React.Fragment>
          <View width="320px">
            <Collapse
              header="Commodo nisi velit culpa consectetur laboris cupidatat ullamco minim Lorem dolore veniam enim excepteur."
              isOpen={on}
              onCollapse={on ? flop : flip}
            >
              <View>
                <Text>
                  Laboris elit commodo reprehenderit aliquip ex. Lorem deserunt
                  non qui in est ipsum. Eu elit dolor irure pariatur consectetur
                  aliquip ullamco minim sint officia commodo aliqua qui
                  consequat. Commodo aliquip consectetur mollit voluptate eu.
                  Cillum reprehenderit incididunt nostrud veniam ad labore
                  nostrud enim sit aute ea excepteur ipsum cupidatat. Est magna
                  voluptate eiusmod nostrud. Exercitation do non do eu mollit ut
                  ullamco et tempor do. Incididunt sint non labore culpa dolore
                  elit non consectetur aute deserunt amet ut. Elit anim
                  consectetur est in enim sit minim Lorem velit. Sit dolor esse
                  ullamco nostrud pariatur ullamco non aliquip deserunt minim.
                  Velit ex aliqua ullamco magna nisi ut pariatur ullamco ex
                  Lorem do. Commodo nisi anim laboris et reprehenderit Lorem
                  tempor commodo proident ea proident aliquip.
                </Text>
              </View>
            </Collapse>
          </View>
        </React.Fragment>
      )}
    </Flipflop>
  </div>
);

WithHeaderString.storyName = "with header string";

export const WithHeaderComponent = () => (
  <div style={{ width: "50%" }}>
    <Flipflop>
      {({ on, flip, flop }) => (
        <React.Fragment>
          <View width="320px">
            <Collapse
              header={() => (
                <View>
                  <Text ellipsis>
                    Laboris elit commodo reprehenderit aliquip ex. Lorem
                    deserunt non qui in est ipsum. Eu el
                  </Text>
                  <Text fontSize={1} color="subtle">
                    Sub title 1
                  </Text>
                </View>
              )}
              isOpen={on}
              onCollapse={on ? flop : flip}
            >
              <View>
                <Text>
                  Laboris elit commodo reprehenderit aliquip ex. Lorem deserunt
                  non qui in est ipsum. Eu elit dolor irure pariatur consectetur
                  aliquip ullamco minim sint officia commodo aliqua qui
                  consequat. Commodo aliquip consectetur mollit voluptate eu.
                  Cillum reprehenderit incididunt nostrud veniam ad labore
                  nostrud enim sit aute ea excepteur ipsum cupidatat. Est magna
                  voluptate eiusmod nostrud. Exercitation do non do eu mollit ut
                  ullamco et tempor do. Incididunt sint non labore culpa dolore
                  elit non consectetur aute deserunt amet ut. Elit anim
                  consectetur est in enim sit minim Lorem velit. Sit dolor esse
                  ullamco nostrud pariatur ullamco non aliquip deserunt minim.
                  Velit ex aliqua ullamco magna nisi ut pariatur ullamco ex
                  Lorem do. Commodo nisi anim laboris et reprehenderit Lorem
                  tempor commodo proident ea proident aliquip.
                </Text>
              </View>
            </Collapse>
          </View>
        </React.Fragment>
      )}
    </Flipflop>
  </div>
);

WithHeaderComponent.storyName = "with header component";

export const WithoutHeader = () => (
  <div style={{ width: "50%" }}>
    <Flipflop>
      {({ on, flip, flop }) => (
        <React.Fragment>
          <ButtonFilled color="accent" onClick={on ? flop : flip}>
            {on ? "Close" : "Open"}
          </ButtonFilled>
          <Collapse isOpen={on}>
            <View>
              <Text>
                Nostrud ea sit veniam cillum ad tempor eiusmod voluptate. Qui
                culpa ipsum officia sint esse adipisicing eu amet anim est ad.
                Dolor pariatur dolore laborum excepteur laboris pariatur Lorem.
                Ullamco Lorem ut ea consectetur anim eu Lorem aute do. Est
                labore velit incididunt magna eiusmod pariatur exercitation
                veniam non. Eu non esse veniam non sit mollit amet culpa laboris
                do deserunt cupidatat consequat deserunt. In reprehenderit esse
                ut fugiat reprehenderit ipsum sint est est ea est ea incididunt.
                Culpa officia laboris cillum velit et amet in excepteur sint
                exercitation occaecat. Est laborum voluptate magna sunt ad ad
                dolore ad cillum voluptate elit magna consequat mollit. Do ea ut
                anim non. Pariatur elit quis ut deserunt velit aute ad aliquip.
                Fugiat quis id tempor ipsum voluptate non aliqua cillum esse
                eiusmod. Voluptate cillum occaecat incididunt nostrud ea sit
                tempor velit.
              </Text>
            </View>
          </Collapse>
        </React.Fragment>
      )}
    </Flipflop>
  </div>
);

WithoutHeader.storyName = "without header";

export const WithReverseCollapse = () => (
  <div style={{ width: "50%" }}>
    <Flipflop>
      {({ on, flip, flop }) => (
        <React.Fragment>
          <View
            width="320px"
            height="500px"
            position="relative"
            overflow="hidden"
            backgroundColor="soft"
          >
            <View
              position="absolute"
              css={{
                bottom: 0,
              }}
            >
              <Collapse
                header={() => (
                  <View>
                    <Text color="background" fontWeight="semibold" fontSize={3}>
                      Title 1
                    </Text>
                    <Text fontSize={1} color="background">
                      Sub title 1
                    </Text>
                  </View>
                )}
                isOpen={on}
                onCollapse={on ? flop : flip}
                reverseCollapse
                headerProps={{
                  backgroundColor: "accent",
                  boxShadow: "soft",
                  borderBottom: 1,
                  borderColor: "background",
                }}
                iconProps={{
                  color: "background",
                }}
              >
                <View height="450px" overflow="scroll" paddingTop={2}>
                  <Text>
                    Laboris elit commodo reprehenderit aliquip ex. Lorem
                    deserunt non qui in est ipsum. Eu elit dolor irure pariatur
                    consectetur aliquip ullamco minim sint officia commodo
                    aliqua qui consequat. Commodo aliquip consectetur mollit
                    voluptate eu. Cillum reprehenderit incididunt nostrud veniam
                    ad labore nostrud enim sit aute ea excepteur ipsum
                    cupidatat. Est magna voluptate eiusmod nostrud. Exercitation
                    do non do eu mollit ut ullamco et tempor do. Incididunt sint
                    non labore culpa dolore elit non consectetur aute deserunt
                    amet ut. Elit anim consectetur est in enim sit minim Lorem
                    velit. Sit dolor esse ullamco nostrud pariatur ullamco non
                    aliquip deserunt minim. Velit ex aliqua ullamco magna nisi
                    ut pariatur ullamco ex Lorem do. Commodo nisi anim laboris
                    et reprehenderit Lorem tempor commodo proident ea proident
                    aliquip. Eu deserunt do enim reprehenderit do anim laborum
                    reprehenderit proident fugiat minim id. Laboris ea dolore
                    eiusmod veniam. Fugiat dolor do veniam culpa consectetur
                    aliqua. Velit laborum reprehenderit exercitation minim dolor
                    dolor proident ad enim duis labore duis. Sint magna
                    excepteur proident sint irure officia non cupidatat. Irure
                    amet labore commodo veniam labore duis cillum quis sint
                    officia aute ea cupidatat. Non voluptate non aute nisi. Aute
                    esse exercitation do in ullamco et velit elit. Laboris
                    eiusmod cillum adipisicing aliquip anim officia mollit elit
                    pariatur aliquip aliqua deserunt commodo. Quis consequat
                    ipsum exercitation nisi ad deserunt dolore duis amet et.
                    Eiusmod eu esse voluptate voluptate fugiat est officia id do
                    et tempor. Duis sunt pariatur amet dolore commodo sit
                    aliquip. Tempor est est aliqua proident. Fugiat do anim
                    dolor dolor consequat in qui excepteur consectetur sunt
                    magna non ipsum. Cillum excepteur voluptate cupidatat
                    consequat nisi id duis ex pariatur sunt reprehenderit. Ut id
                    officia est pariatur et do sint esse sint amet magna magna.
                    Sunt pariatur proident aliquip non. Anim laboris nostrud
                    reprehenderit do minim culpa ea adipisicing Lorem officia.
                    Id do consectetur elit irure ullamco voluptate. Incididunt
                    quis labore duis fugiat consectetur id nisi laboris. Commodo
                    proident sunt elit reprehenderit do aliquip cupidatat non
                    commodo aliquip excepteur nostrud amet mollit. Irure quis
                    sunt amet dolore sunt irure minim reprehenderit nostrud
                    veniam.
                  </Text>
                </View>
              </Collapse>
            </View>
          </View>
        </React.Fragment>
      )}
    </Flipflop>
  </div>
);

WithReverseCollapse.storyName = "with reverseCollapse";
