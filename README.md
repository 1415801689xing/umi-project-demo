English | [简体中文](https://github.com/umijs/umi/blob/master/README_zh-CN.md)

# umi

[![NPM version](https://camo.githubusercontent.com/172cb94cb784b91f40864d5384fe68826b8ccd63/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f756d692e7376673f7374796c653d666c6174)](https://npmjs.org/package/umi) [![Build Status](https://camo.githubusercontent.com/e697936406e7c950726cb7bbcbeb192c61b3e49d/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f756d696a732f756d692e7376673f7374796c653d666c6174)](https://travis-ci.org/umijs/umi) [![NPM downloads](https://camo.githubusercontent.com/412f16c30ffe1f03c13de86141cc0afe9424431e/687474703a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f756d692e7376673f7374796c653d666c6174)](https://npmjs.org/package/umi) [![lerna](https://camo.githubusercontent.com/ecafd86d8356a1adc60fb4fd393bcc7584187f99/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61696e7461696e6564253230776974682d6c65726e612d6363303066662e737667)](https://lernajs.io/)

🌋 Pluggable enterprise-level react application framework.

> Please consider following this project's author, [sorrycc](https://github.com/sorrycc), and consider starring the project to show your ❤️ and support.

------

## Features

- 📦 **Out of box**, with built-in support for react, react-router, etc.
- 🏈 **Next.js like and full featured routing conventions**, which also supports configured routing
- 🎉 **Complete plugin system**, covering every lifecycle from source code to production
- 🚀 **High performance**, with support for PWA, route-level code splitting, etc. via plugins
- 💈 **Support for static export**, adapt to various environments, such as console app, mobile app, [egg](https://github.com/eggjs/egg), Alipay wallet, etc
- 🚄 **Fast dev startup**, support enable [dll](https://umijs.org/plugin/umi-plugin-react.html#dll) and [hard-source-webpack-plugin](https://umijs.org/plugin/umi-plugin-react.html#hardSource) with config
- 🐠 **Compatible with IE9**, based on [umi-plugin-polyfills](https://umijs.org/plugin/umi-plugin-react.html#polyfills)
- 🍁 **Support TypeScript**, including d.ts definition and `umi test`
- 🌴 **Deep integration with dva**, support duck directory, automatic loading of model, code splitting, etc

## Getting Started

```
# Install deps
$ yarn global add umi # OR npm install -g umi

# Create application
$ mkdir myapp && cd myapp

# Create page
$ umi generate page index

# Start dev server
$ umi dev

# Build and deploy
$ umi build
```

[Getting started with a 10 minutes video](https://youtu.be/vkAUGUlYm24)

## Examples

- [Ant Design Pro](https://github.com/ant-design/ant-design-pro)
- [Antd Admin](https://github.com/zuiidea/antd-admin)

## Community

| Slack Group                                                  | Github Issue                                            | 钉钉群                                                       | 微信群                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [sorrycc.slack.com](https://join.slack.com/t/sorrycc/shared_invite/enQtNTUzMTYxNDQ5MzE4LTg1NjEzYWUwNDQzMWU3YjViYjcyM2RkZDdjMzE0NzIxMTg3MzIwMDM2YjUwNTZkNDdhNTY5ZTlhYzc1Nzk2NzI) | [umijs/umi/issues](https://github.com/umijs/umi/issues) | [![img](https://camo.githubusercontent.com/bb08beaf0b9025c39b9b58827c79227c69b25f6a/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f6a505863514f6c474c6e796c474d66724b64427a2e6a7067)](https://camo.githubusercontent.com/bb08beaf0b9025c39b9b58827c79227c69b25f6a/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f6a505863514f6c474c6e796c474d66724b64427a2e6a7067) | [![img](https://camo.githubusercontent.com/de180d2206bb12bdea4318546e536bb70d4dcaf0/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f54423133553661463644704b31526a535a467258586137385658612d3735322d3937342e6a7067)](https://camo.githubusercontent.com/de180d2206bb12bdea4318546e536bb70d4dcaf0/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f54423133553661463644704b31526a535a467258586137385658612d3735322d3937342e6a7067) |

## License

[MIT](https://github.com/umijs/umi/blob/master/LICENSE)