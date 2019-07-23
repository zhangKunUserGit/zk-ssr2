import { renderRoutes } from 'react-router-config';import routerConfig from './router';import createStore from './store/clientStore';export default function(preloadState = {}) {  // // 公共部分，在Node环境中无window document navigator 等对象  if (typeof window === 'undefined') {    global.window = {};    global.document = {};  }  if (typeof window !== 'undefined' && typeof window.__INITIAL_STORE__ !== 'undefined') {    // 清除    window.__INITIAL_STORE__ = null;    const initialStateEl = document.getElementById('initialState');    if (initialStateEl && initialStateEl.remove) {      initialStateEl.remove();    }  }  return {    router: renderRoutes(routerConfig),    store: createStore(preloadState),    routerConfig  };}