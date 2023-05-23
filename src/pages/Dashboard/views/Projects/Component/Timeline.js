import React from 'react';
import Chip from '@material-ui/core/Chip';

const EXAMPLE = [
  {
    data: '2021-03-22',
    status: 'status',
    statusB: 'Ready for production',
    statusE: 'In Progress',
  },
  {
    data: '2021-03-23',
    status: 'status',
    statusB: 'Production on Progress',
    statusE: 'Done',
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;

    return <div style={{ width: '100%' }}></div>;
  }
}
