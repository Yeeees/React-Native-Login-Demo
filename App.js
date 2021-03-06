/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/Home'
import Dashboard from './app/components/Dashboard'

export default createStackNavigator ({
  home: Home,
  dashboard: Dashboard
})

