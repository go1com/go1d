---
"@go1d/go1d": major
---

Adds a new border radius scale `radius = [0, 4, 8, 12, 16, 32, 48, 64, 128]`, in addition to the previously used spacing scale `spacing = [0, 2, 4, 8, 16, 24, 32, 48, 64, 128, 256]`. This means previous components using the `borderRadius` prop with a number, such as `borderRadius={1}`, will now be using a different scale and likely need to be updated. Please check components using a border radius array index of any number other than `{0}` or `{4}` (which remain the same). This change also updates components with Go1d using the border radius: Avatar, Button, Checkbox, Course Card, Date Range, DatePicker, EmptyState, Input Group, Modal, Overview CTA Card, Pill, SlatSkeleton, Stepper, Table, TagToggle, and View.
