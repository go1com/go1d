---
title: Banner
status: ready
releaseVersion: 0.0.36
---

## Examples

## Type success
```.jsx
<Banner
  type="success"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Success! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```
## Type warning
```.jsx
<Banner
  type="warning"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Warning! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```
## Type danger
```.jsx
<Banner
  type="danger"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Danger! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```
## Type note
```.jsx
<Banner
  type="note"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Please note: </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```

## Type custom
```.jsx
<Banner
  type="success"
  close={() => alert('close event')}
  customColor="accent"
>
  <Text fontWeight="semibold">Success! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```


```!jsx
<ComponentDoc component="BannerProps" />
```
