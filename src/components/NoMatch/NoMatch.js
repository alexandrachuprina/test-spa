import React from 'react';
import { styled } from 'styled-components';

const NoMatch = () => {
  return (
    <Card>
      <h2>Страница не найдена :(</h2>
      <p>Попробуйте вернуться на главную</p>
    </Card>
  )
}

export default NoMatch

const Card = styled.div`
  margin-left: 100px;
`