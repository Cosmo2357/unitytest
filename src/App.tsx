import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/uncomplego.loader.js",
    dataUrl: "Build/uncomplego.data",
    frameworkUrl: "Build/uncomplego.framework.js",
    codeUrl: "Build/uncomplego.wasm",
  });
  
  return <Unity 
  style={{width: "100%", height: "100vh"}}
  unityProvider={unityProvider} />;

}

export default App;
