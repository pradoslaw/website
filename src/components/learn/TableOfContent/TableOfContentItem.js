import styled from "@emotion/styled";
import { space, typography, color } from 'styled-system'

const ListItem = styled('li')`
  list-style: none;
  border-left-style: solid;
  border-left-width: 2px;

  padding-top: .6rem;
  padding-bottom: .6rem;
  border-color: ${props => (props.isActive ? props.theme.colors.primary : 'transparent')};
  color: ${props => (props.isActive ? props.theme.colors.dark : props.theme.colors.caption)};
  font-weight: ${props => (props.isActive ? '500' : '400')};
  padding-left: ${props => (props.level === 2 ? '3rem': '1.5rem')} !important;

`;

const TableOfContentItem = styled(ListItem)(space, typography, color);

TableOfContentItem.defaultProps = {
  fontSize: 'small',
};

export default TableOfContentItem;
