import { useEffect } from "react";

const usePageBackground = (className, path) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (path === window.location.pathname) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    const cleanup = () => {
      body.classList.remove(className);
    };

    return cleanup;
  }, [className, path]);
};

export default usePageBackground;
