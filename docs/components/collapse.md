---
title: Collapse
status: ready
lead:
---

## Examples

### Collapse component with header string

```.jsx
<Flipflop>{({on, flip, flop}) => ( <React.Fragment>
    <View width="320px">
      <Collapse header="Commodo nisi velit culpa consectetur laboris cupidatat ullamco minim Lorem dolore veniam enim excepteur." isOpen={on} onCollapse={on ? flop : flip}>
        <View>
          <Text>Laboris elit commodo reprehenderit aliquip ex. Lorem deserunt non qui in est ipsum. Eu elit dolor irure pariatur consectetur aliquip ullamco minim sint officia commodo aliqua qui consequat.

  Commodo aliquip consectetur mollit voluptate eu. Cillum reprehenderit incididunt nostrud veniam ad labore nostrud enim sit aute ea excepteur ipsum cupidatat. Est magna voluptate eiusmod nostrud. Exercitation do non do eu mollit ut ullamco et tempor do.

  Incididunt sint non labore culpa dolore elit non consectetur aute deserunt amet ut. Elit anim consectetur est in enim sit minim Lorem velit. Sit dolor esse ullamco nostrud pariatur ullamco non aliquip deserunt minim. Velit ex aliqua ullamco magna nisi ut pariatur ullamco ex Lorem do. Commodo nisi anim laboris et reprehenderit Lorem tempor commodo proident ea proident aliquip.</Text>
        </View>
      </Collapse>
    </View>
  </React.Fragment>
)}
</Flipflop>
```

### Collapse component with header component

```.jsx
<Flipflop>{({on, flip, flop}) => ( <React.Fragment>
    <View width="320px">
      <Collapse header={() => (
        <View>
          <Text>Title 1</Text>
          <Text fontSize={1} color="subtle">Sub title 1</Text>
        </View>
      )} isOpen={on} onCollapse={on ? flop : flip}>
        <View>
          <Text>Laboris elit commodo reprehenderit aliquip ex. Lorem deserunt non qui in est ipsum. Eu elit dolor irure pariatur consectetur aliquip ullamco minim sint officia commodo aliqua qui consequat.

  Commodo aliquip consectetur mollit voluptate eu. Cillum reprehenderit incididunt nostrud veniam ad labore nostrud enim sit aute ea excepteur ipsum cupidatat. Est magna voluptate eiusmod nostrud. Exercitation do non do eu mollit ut ullamco et tempor do.

  Incididunt sint non labore culpa dolore elit non consectetur aute deserunt amet ut. Elit anim consectetur est in enim sit minim Lorem velit. Sit dolor esse ullamco nostrud pariatur ullamco non aliquip deserunt minim. Velit ex aliqua ullamco magna nisi ut pariatur ullamco ex Lorem do. Commodo nisi anim laboris et reprehenderit Lorem tempor commodo proident ea proident aliquip.</Text>
        </View>
      </Collapse>
    </View>
  </React.Fragment>
)}
</Flipflop>
```
