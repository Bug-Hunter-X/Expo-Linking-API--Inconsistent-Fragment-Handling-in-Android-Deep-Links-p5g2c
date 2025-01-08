# Expo Linking API: Android Deep Link Fragment Handling Issue

This repository demonstrates an uncommon bug related to the Expo `Linking` API's handling of URI fragments in deep links on Android.  The issue results in inconsistent truncation or loss of data after the '#' symbol in the deep link URL.  The bug is intermittent and difficult to reliably reproduce.

The `bug.js` file shows how a deep link might be handled, and the missing fragment data. The `bugSolution.js` file offers a potential workaround.

**Steps to Reproduce:** (Note:  Reproducibility is inconsistent)
1. Run the app on an Android emulator or device.
2. Open a deep link containing a fragment (e.g., `myapp://route#fragmentData`).
3. Observe the received data within the app. Inconsistent results are expected.

**Potential Solutions:** (Workarounds are detailed in `bugSolution.js`)
*Using a different library: Alternative deep linking solutions may offer more reliable fragment handling.
*Alternative data encoding: Encoding fragment data into the URL path or query parameters could provide a more reliable way to pass the required data.

This issue highlights the importance of thorough testing and potential workarounds for handling deep links with Expo on Android.