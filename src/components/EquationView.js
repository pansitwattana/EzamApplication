import React from 'react';
import { List } from 'antd-mobile';
import { Input, LaTex } from './common';

const { Item } = List;

const EquationView = ({ equations, onPress, line }) => {
  const equationView = equations.map((equation, index) => 
    <Item 
      key={equation.id} 
      onPressIn={() => onPress(index)}
      style={{ height: 60, borderWidth: line === index ? 2 : 0, borderColor: '#ebebef' }}
    >
      <Input 
        text={line === index ? equation.typed : ''} 
        keystroke={equation.key} 
        cmd={equation.cmd} 
        active={line === index}
      />
    </Item>
  );

  const latex = <LaTex text='x^2+3x+5' />

  return (
    <List renderHeader={latex}>
      {equationView}
    </List>
  );
};

export default EquationView;
