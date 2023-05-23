import { useMemo } from "react";

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#4299E1",
};

const acceptStyle = {
  borderColor: "#48BB78",
};

const rejectStyle = {
  borderColor: "#F56565",
};

export const useDropzoneStyle = ({
  isDragAccept,
  isDragActive,
  isDragReject,
  isFileTooLarge,
}) => {
  const styles = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject || isFileTooLarge ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isFileTooLarge, isDragAccept]
  );

  return styles;
};
