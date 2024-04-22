
# OS Redirector

A simple React hook to redirect users based on their operating system. This hook detects whether the user is on Android, iOS, or other operating systems and redirects them to specified URLs.

## Installation

To install the `os-redirector`, run the following command in your React project:

```bash
npm install os-redirector
```

## Usage

Here is how you can use the `useOSRedirect` hook in your React application:

```jsx
import React from 'react';
import useOSRedirect from 'os-redirector';

const App = () => {
  // URLs to redirect to based on the operating system
  const androidUrl = "https://play.google.com/store";
  const iosUrl = "https://www.apple.com/app-store/";
  const defaultUrl = "/home";

  useOSRedirect(androidUrl, iosUrl, defaultUrl);

  return <div>Redirecting...</div>;
};

export default App;
```

### Props

- `androidUrl` (string): URL to redirect to if the user is on an Android device.
- `iosUrl` (string): URL to redirect to if the user is on an iOS device.
- `defaultUrl` (string): URL to redirect to if the user is not on Android or iOS.

## Contributing

Contributions are always welcome! Please feel free to submit any issues or pull requests.

## License

Distributed under the MIT License. See `LICENSE` for more information.

Note :warning:	
-------
Not all of these codes have to be from my pure work, there are many of them on the Internet that I may have done some but not limited to some modification, improvement, or modification of the appearance of the code to become readable, understandable or appropriate to the place of use.
If you have any code you think will be useful and people will use frequently in many projects do not hesitate to do a pull request to this repo.

Let's Connect
-------

- [Linkedin](https://www.linkedin.com/in/somarkn99/)
- [website](https://www.somar-kesen.com/)
- [facebook](https://www.facebook.com/SomarKesen)
- [instagram](https://www.instagram.com/somar_kn/)

Hire Me :fire:
-------
By the way, I'm available to work as freelancer, feel free to communicate with me in order to transform your project from an idea to reality.

You Can contact me for freelancer job vie email :
```
freelancer@somar-kesen.com
```

Security
--------

If you discover any security related issues, please email them first to contact@somar-kesen.com,
if we do not fix it within a short period of time please open a new issue describe your problem.
