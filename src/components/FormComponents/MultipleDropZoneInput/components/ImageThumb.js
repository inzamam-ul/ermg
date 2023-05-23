import React, { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

import { PreviewImage } from ".";

export const ImageThumb = ({ file, removeFile }) => {
  const [state, setState] = useState({
    isLoading: true,
    thumb: null,
  });

  useEffect(() => {
    if (!file) return;

    let reader = new FileReader();
    reader.onload = () => {
      setState({ isLoading: false, thumb: reader.result });
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }

  if (state.isLoading) {
    return <Spinner />;
  }

  return <PreviewImage onClick={removeFile} src={state.thumb} />;
};
