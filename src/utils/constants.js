import React from 'react';
import base64 from 'react-native-base64';

const UserName = '4327fdd0b5bc12f29e6df9013a5b869e';
const Password = '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';

const BaseUrl =
  'https://' + UserName + ':' + Password + '@lensman-express.myshopify.com';
const authData =
  '4327fdd0b5bc12f29e6df9013a5b869e' +
  ':' +
  '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';
const base64Auth = 'Basic ' + base64.encode(authData);
const BaseUrlSchool = '';

export {BaseUrl, base64Auth, BaseUrlSchool};
