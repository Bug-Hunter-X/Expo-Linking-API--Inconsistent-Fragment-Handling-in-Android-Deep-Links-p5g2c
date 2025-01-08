This bug occurs when using the Expo `Linking` API to handle deep links on Android.  If the app is opened from a deep link that contains a URI fragment (the part of the URL after the `#` symbol), the fragment is often truncated or completely lost, preventing proper handling of the intended data within the app. This happens inconsistently, making debugging difficult.