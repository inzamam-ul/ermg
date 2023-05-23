import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '@chakra-ui/react';

export const LinkButton = ({ to, onClick, children, ...rest }) => {
  const { push } = useHistory();
  return (
    <Button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        push(to);
      }}
    >
      {children}
    </Button>
  );
};
