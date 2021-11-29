import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--green);
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;