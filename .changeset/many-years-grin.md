---
"@go1d/go1d": patch
---

MultiSelect component: 
- Fixed bug where clear selection button is rendered and usable when the MultiSelect is disabled
- This change was made to prevent a disabled MultiSelect component's values from being altered, which should not be possible.
- This change should have no impact to consumers of this component